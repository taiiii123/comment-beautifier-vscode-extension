<div align="right" style="font-size: 20px;">

[English](./README.md) | [日本語](./README.ja.md)

</div>

# Comment Beautifier - VS Code Extension

コードの可読性を向上させるために、コメントのインデントを揃えるVisual Studio Code拡張機能です。

### 動作例

<p align="center"><img src="https://github.com/user-attachments/assets/be91f613-d954-4e39-85a2-643a5c110ae7" style="filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));"/></p>

## 機能 ✨

- 単一行コメントと複数行コメントを自動的に整列
- 以下のプログラミング言語をサポート：
  - TypeScript/JavaScript
  - Python
  - Java
  - C/C++
  - C#
  - PHP
  - Ruby
  - Go
  - Rust
  - Swift
  - SQL
  - Gradle (Kotlin DSL)

## 使い方 💡

1. フォーマットしたいコメントを含むコードブロックを選択
2. 右クリックして、コンテキストメニューから「コメントを整形」を選択
3. コメントが一定のインデントに揃えられます

## 例

整形前：
```javascript
function example() {
// これはコメントです
  // 別のコメント
    // もう1つのコメント
}
```

整形後：
```javascript
function example() {
    // これはコメントです
    // 別のコメント
    // もう1つのコメント
}
```

## 変更履歴 📝

すべての変更内容は[CHANGELOG](./CHANGELOG.md)で確認できます。

## インストール方法 🔧

1. Visual Studio Codeを開く
2. `Ctrl+P`（Windows/Linux）または`Cmd+P`（macOS）を押す
3. `ext install comment-beautifier`と入力
4. Enterを押す

## ライセンス ⚖️

MIT

<hr>

試してみてください！✨
