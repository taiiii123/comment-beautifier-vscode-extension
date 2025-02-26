import * as vscode from 'vscode';
import { LANGUAGE_COMMENT_RULES } from './utils/languageRules';

function formatComments(editor: vscode.TextEditor, alignment: 'left' | 'right') {
    const languageId = editor.document.languageId;
    const commentRule = LANGUAGE_COMMENT_RULES[languageId];

    if (!commentRule) {
        vscode.window.showWarningMessage(`Language ${languageId} is not supported.`);
        return;
    }

    const selection = editor.selection;
    const text = editor.document.getText(selection);
    const lines = text.split('\n');

    // コメント開始位置の最小値と最大値を見つける
    let minCommentStart = Infinity;
    let maxCommentStart = 0;
    lines.forEach(line => {
        const trimmed = line.trimStart();
        // 単一行コメントのチェック
        if (commentRule.single.some(comment => trimmed.startsWith(comment))) {
            const commentStart = line.length - trimmed.length;
            minCommentStart = Math.min(minCommentStart, commentStart);
            maxCommentStart = Math.max(maxCommentStart, commentStart);
        }
        // 複数行コメントのチェック
        if (commentRule.multi) {
            commentRule.multi.forEach(multiComment => {
                if (trimmed.includes(multiComment.start) || trimmed.includes(multiComment.end) ||
                    (trimmed.startsWith('*') && !trimmed.startsWith('*/'))) {
                    const commentStart = line.length - trimmed.length;
                    minCommentStart = Math.min(minCommentStart, commentStart);
                    maxCommentStart = Math.max(maxCommentStart, commentStart);
                }
            });
        }
    });

    // 選択された配置方法に基づいてインデントを決定
    const targetIndent = alignment === 'right' ? maxCommentStart : minCommentStart;

    // コメントのインデントを揃える
    const formattedLines = lines.map(line => {
        const trimmed = line.trimStart();
        let isComment = false;

        // 単一行コメントのチェック
        if (commentRule.single.some(comment => trimmed.startsWith(comment))) {
            isComment = true;
        }

        // 複数行コメントのチェック
        if (commentRule.multi) {
            commentRule.multi.forEach(multiComment => {
                if (trimmed.includes(multiComment.start) || trimmed.includes(multiComment.end) ||
                    (trimmed.startsWith('*') && !trimmed.startsWith('*/'))) {
                    isComment = true;
                }
            });
        }

        if (isComment) {
            const spaces = ' '.repeat(targetIndent);
            return spaces + trimmed;
        }
        return line;
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

export function deactivate() {}
