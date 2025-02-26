<div align="right" style="font-size: 20px;">

[English](./README.md) | [日本語](./README.ja.md)

</div>

# Comment Beautifier - VS Code Extension

コードの可読性を向上させるために、コメントのインデントを揃えるVisual Studio Code拡張機能です。

### 動作例

<p align="center"><img src="https://github.com/user-attachments/assets/d25ef374-8fec-4d6b-bd80-5c27f5e75049" style="filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));"/></p>

## 機能 ✨

- 2種類のコメント配置オプション：
  - 左揃え（最小インデント）
  - 右揃え（最大インデント）
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
2. 右クリックして、以下のいずれかを選択：
   - 「コメントを左揃えに整形」で最小インデントに揃える
   - 「コメントを右揃えに整形」で最大インデントに揃える
3. 選択した方法でコメントが整形されます

<img src="https://github.com/user-attachments/assets/1528d74d-f853-4a54-9bc9-43ef8a873873" height=500 style="filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));"></img>

## 例

整形前：
```javascript
function example() {
// これはコメントです
  // 別のコメント
    // もう1つのコメント
}
```

整形後（左揃え）：
```javascript
function example() {
// これはコメントです
// 別のコメント
// もう1つのコメント
}
```

整形後（右揃え）：
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
