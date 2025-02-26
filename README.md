<div align="right" style="font-size: 20px;">

[English](./README.md) | [日本語](./README.ja.md)

</div>

# Comment Beautifier - VS Code Extension

A Visual Studio Code extension that aligns comment indentation to make your code more readable.

### Demo

<p align="center"><img src="https://github.com/user-attachments/assets/6812ed9e-bf75-4da5-a318-80bcbf1a84c2" style="filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));"/></p>

## Features ✨

- Two alignment options for comments:
  - Left alignment (minimum indentation)
  - Right alignment (maximum indentation)
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
2. Right-click and select either:
   - "Align Comments Left" for minimum indentation
   - "Align Comments Right" for maximum indentation
3. Comments will be aligned according to your choice

<img src="https://github.com/user-attachments/assets/fc4c7b07-888f-4a65-989b-88b089e26e09" height=500 style="filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));"></img>

### Example

Before:
```javascript
function example() {
// This is a comment
  // Another comment
    // One more comment
}
```

After (Left alignment):
```javascript
function example() {
// This is a comment
// Another comment
// One more comment
}
```

After (Right alignment):
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
