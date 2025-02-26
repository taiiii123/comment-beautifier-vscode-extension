<div align="right" style="font-size: 20px;">

[English](./README.md) | [日本語](./README.ja.md)

</div>

# Comment Beautifier - VS Code Extension

A Visual Studio Code extension that aligns comment indentation to make your code more readable.

### Demo

<p align="center"><img src="https://github.com/user-attachments/assets/be91f613-d954-4e39-85a2-643a5c110ae7" style="filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));"/></p>

## Features ✨

- Automatically aligns single-line and multi-line comments
- Supports multiple programming languages:
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

## Usage 💡

1. Select the code block containing comments you want to format
2. Right-click and select "Beautify Comment Indentation" from the context menu
3. Comments will be aligned to maintain consistent indentation

### Example

Before:
```javascript
function example() {
// This is a comment
  // Another comment
    // One more comment
}
```

After:
```javascript
function example() {
    // This is a comment
    // Another comment
    // One more comment
}
```

## Change Log 📝

You can checkout all our changes in our [CHANGELOG](./CHANGELOG.md).

## Installation 🔧

1. Open Visual Studio Code
2. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (macOS)
3. Type `ext install comment-beautifier`
4. Press Enter

## License ⚖️

MIT

<hr>

Give it a try! ✨
