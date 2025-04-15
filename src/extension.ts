// extension.ts
import * as vscode from 'vscode';
import { LANGUAGE_COMMENT_RULES } from './utils/languageRules';

function formatComments(editor: vscode.TextEditor, alignment: 'left' | 'right') {
    const languageId = editor.document.languageId;
    const commentRule = LANGUAGE_COMMENT_RULES[languageId];

    if (!commentRule) {
        vscode.window.showWarningMessage(`Language ${languageId} is not supported.`);
        return;
    }

    // 選択がなければドキュメント全体を使用
    const selection = editor.selection.isEmpty
        ? new vscode.Range(0, 0, editor.document.lineCount - 1, editor.document.lineAt(editor.document.lineCount - 1).text.length)
        : editor.selection;

    const text = editor.document.getText(selection);
    const lines = text.split('\n');

    // 複数行コメントのブロックを検出
    const multiLineCommentBlocks: { start: number; end: number; rule: { start: string; end: string } }[] = [];

    if (commentRule.multi) {
        let inComment = false;
        let currentBlock: { start: number; end: number; rule: { start: string; end: string } } | null = null;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (!inComment) {
                // 開始記号を探す
                for (const rule of commentRule.multi) {
                    const startIndex = line.indexOf(rule.start);
                    if (startIndex !== -1) {
                        inComment = true;
                        currentBlock = { start: i, end: -1, rule: rule };

                        // 同じ行に終了記号があるか確認
                        const endIndex = line.indexOf(rule.end, startIndex + rule.start.length);
                        if (endIndex !== -1) {
                            inComment = false;
                            currentBlock.end = i;
                            multiLineCommentBlocks.push(currentBlock);
                            currentBlock = null;
                        }

                        break;
                    }
                }
            } else {
                // 終了記号を探す
                if (currentBlock) {
                    const endIndex = line.indexOf(currentBlock.rule.end);
                    if (endIndex !== -1) {
                        inComment = false;
                        currentBlock.end = i;
                        multiLineCommentBlocks.push(currentBlock);
                        currentBlock = null;
                    }
                }
            }
        }

        // 最後までコメントが閉じられていない場合、最後の行までをブロックとする
        if (inComment && currentBlock) {
            currentBlock.end = lines.length - 1;
            multiLineCommentBlocks.push(currentBlock);
        }
    }

    // 複数行コメントの整形処理を改善
    for (const block of multiLineCommentBlocks) {
        // 複数行コメントのインデントを分析
        let blockIndent = Infinity;
        let maxIndent = 0;

        // ブロック内の各行を分析してインデントの範囲を取得
        for (let i = block.start; i <= block.end; i++) {
            const line = lines[i].trimEnd();
            const lineIndent = line.length - line.trimLeft().length;

            // 空行でなければインデントを考慮
            if (line.trim().length > 0) {
                blockIndent = Math.min(blockIndent, lineIndent);
                maxIndent = Math.max(maxIndent, lineIndent);
            }
        }

        // 左揃えの場合は最小インデント、右揃えの場合は最大インデント
        const targetIndent = alignment === 'left' ? blockIndent : maxIndent;

        // コメントブロックを整形
        for (let i = block.start; i <= block.end; i++) {
            const line = lines[i].trimEnd();
            const lineContent = line.trimLeft();

            if (i === block.start) {
                // 開始行 - 統一されたインデントを使用
                const afterCommentStart = lineContent.substring(block.rule.start.length).trimLeft();
                lines[i] = ' '.repeat(targetIndent) + block.rule.start +
                        (afterCommentStart ? ' ' + afterCommentStart : '');
            } else if (i === block.end && lineContent.includes(block.rule.end)) {
                // 終了行 - 統一されたインデントを使用
                if (lineContent === block.rule.end) {
                    // 終了記号のみの行
                    lines[i] = ' '.repeat(targetIndent) + ' ' + block.rule.end;
                } else {
                    // 終了記号の前にコンテンツがある場合
                    const contentBeforeEnd = lineContent.substring(0, lineContent.indexOf(block.rule.end)).trimRight();

                    // アスタリスクがある場合はそれを含めたフォーマット
                    if (contentBeforeEnd.startsWith('*') && contentBeforeEnd !== '*') {
                        const content = contentBeforeEnd.substring(1).trimLeft();
                        lines[i] = ' '.repeat(targetIndent) + '* ' + content + ' ' + block.rule.end;
                    } else {
                        lines[i] = ' '.repeat(targetIndent) + contentBeforeEnd + ' ' + block.rule.end;
                    }
                }
            } else {
                // 中間行 - アスタリスクを常に同じ位置に配置
                // 開始行のコメント記号の長さを考慮して、アスタリスクの位置を調整する
                const asteriskPos = line.indexOf('*');
                let content = '';

                if (asteriskPos !== -1 && line.charAt(asteriskPos + 1) !== '/') {
                    // アスタリスクがある行
                    content = line.substring(asteriskPos + 1).trimLeft();
                } else {
                    // アスタリスクがない行
                    content = lineContent;
                }

                // 開始行のコメント記号 /* の後に合わせて * を配置するため、1つスペースを追加
                lines[i] = ' '.repeat(targetIndent) + ' * ' + content;
            }
        }
    }
    // 単一行コメントの処理
    // すべての行を分析してコメント位置と最大コード長を見つける
    let maxCodeLength = 0;
    let minCommentIndex = Infinity;  // 最も左にあるコメントの位置を追跡

    const lineData = lines.map(line => {
        const trimmed = line.trimEnd();
        let commentIndex = -1;
        let commentSymbol = '';
        let isStandaloneComment = false;

        // 複数行コメント内の行はスキップ
        const lineIdx = lines.indexOf(line);
        if (multiLineCommentBlocks.some(block => lineIdx >= block.start && lineIdx <= block.end)) {
            return {
                line,
                commentIndex: -1,
                commentSymbol: '',
                isStandaloneComment: false,
                indentation: line.length - line.trimLeft().length,
                formattedLine: line // 複数行コメント内の行は既に整形済み
            };
        }

        // 単一行コメントの位置を探す
        for (const comment of commentRule.single) {
            const index = trimmed.indexOf(comment);
            if (index !== -1 && (commentIndex === -1 || index < commentIndex)) {
                commentIndex = index;
                commentSymbol = comment;

                // これが単独のコメントかどうかを確認（コメントの前に空白のみ）
                isStandaloneComment = trimmed.substring(0, index).trim() === '';
            }
        }

        if (commentIndex !== -1 && !isStandaloneComment) {
            // 非単独コメント行の場合、最小コメント位置を追跡
            minCommentIndex = Math.min(minCommentIndex, commentIndex);
            // コード部分の長さも計算（末尾の空白を除く）
            const codePartTrimmed = line.slice(0, commentIndex).trimEnd();
            maxCodeLength = Math.max(maxCodeLength, codePartTrimmed.length);
        }

        return {
            line,
            commentIndex,
            commentSymbol,
            isStandaloneComment,
            indentation: line.length - line.trimLeft().length, // 元のインデントを保持
            formattedLine: undefined as string | undefined // 後で設定される可能性がある
        };
    });

    // 単独コメント行を識別して分析
    const standaloneCommentLines = lineData.filter(data => data.isStandaloneComment);

    // 単独コメント行がある場合の特別処理
    if (standaloneCommentLines.length > 0) {
        // 連続する単独コメント行をブロックとしてグループ化
        const commentBlocks = [];
        let currentBlock = [];

        for (let i = 0; i < lineData.length; i++) {
            const data = lineData[i];

            if (data.isStandaloneComment) {
                currentBlock.push({ index: i, data });

                // 最後の行またはこの次の行がコメント行でない場合、ブロックを完成させる
                if (i === lineData.length - 1 || !lineData[i + 1].isStandaloneComment) {
                    if (currentBlock.length > 0) {
                        commentBlocks.push(currentBlock);
                        currentBlock = [];
                    }
                }
            }
        }

        // 各コメントブロックを処理
        for (const block of commentBlocks) {
            if (alignment === 'left') {
                // 左揃えの場合：すべてのコメントを最も左のインデントに揃える
                const minIndent = Math.min(...block.map(item => item.data.indentation));

                for (const item of block) {
                    const { commentSymbol } = item.data;
                    const content = item.data.line.slice(item.data.commentIndex + item.data.commentSymbol.length).trimStart();
                    lineData[item.index].formattedLine = ' '.repeat(minIndent) + commentSymbol + ' ' + content;
                }
            } else {
                // 右揃えの場合：すべてのコメントを最も右のインデントに揃える
                const maxIndent = Math.max(...block.map(item => item.data.indentation));

                for (const item of block) {
                    const { commentSymbol } = item.data;
                    const content = item.data.line.slice(item.data.commentIndex + item.data.commentSymbol.length).trimStart();
                    lineData[item.index].formattedLine = ' '.repeat(maxIndent) + commentSymbol + ' ' + content;
                }
            }
        }
    }

    // コード付きのコメント行を処理（非単独コメント行）
    const formattedLines = lineData.map((data, index) => {
        // 複数行コメント内の行または既に処理された単独コメント行はそのフォーマット済みの値を使用
        if (data.formattedLine) {
            return data.formattedLine;
        }

        // コメントがない行はそのまま
        if (data.commentIndex === -1) {
            return data.line;
        }

        const codePart = data.line.slice(0, data.commentIndex).trimEnd();
        const commentContent = data.line.slice(data.commentIndex + data.commentSymbol.length).trimStart();

        if (alignment === 'left') {
            // 左揃え：最小コメント位置に合わせてパディング
            // コード部分が最小コメント位置よりも長い場合は、コード部分の後に1つのスペースを追加
            if (codePart.length >= minCommentIndex) {
                return codePart + ' ' + data.commentSymbol + ' ' + commentContent;
            } else {
                // コード部分が最小コメント位置より短い場合は、パディングを追加
                const padding = ' '.repeat(minCommentIndex - codePart.length);
                return codePart + padding + data.commentSymbol + ' ' + commentContent;
            }
        } else {
            // TODO: 右揃えの処理 インデントの調整 4スペースを修正
            // 右揃え：最大幅に合わせてパディング
            const padding = ' '.repeat(Math.max(1, maxCodeLength - codePart.length + 4));
            return codePart + padding + data.commentSymbol + ' ' + commentContent;
        }
    });

    // テキストを置換
    editor.edit(editBuilder => {
        editBuilder.replace(selection, formattedLines.join('\n'));
    });
}

export function activate(context: vscode.ExtensionContext) {
    let leftDisposable = vscode.commands.registerCommand('comment-indent-formatter.formatLeft', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            formatComments(editor, 'left');
        }
    });

    let rightDisposable = vscode.commands.registerCommand('comment-indent-formatter.formatRight', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            formatComments(editor, 'right');
        }
    });

    context.subscriptions.push(leftDisposable, rightDisposable);
}
