"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const languageRules_1 = require("./utils/languageRules");
function formatComments(editor, alignment) {
    const languageId = editor.document.languageId;
    const commentRule = languageRules_1.LANGUAGE_COMMENT_RULES[languageId];
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
function activate(context) {
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
function deactivate() { }
//# sourceMappingURL=extension.js.map