# Change Log

All notable changes to the "comment-beautifier" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.0.2] - 2025-04-16

### Added
- Improved comment alignment functionality with before/after examples:
 - **Left alignment**: All comments align to the minimum indent position

   Before:
   ```
   int a = 1;             // test comment 1
   int b = 2;       // test comment 2
   int c = a + b;                    // test comment 3
   ```

   After:
   ```
   int a = 1;       // test comment 1
   int b = 2;       // test comment 2
   int c = a + b;   // test comment 3
   ```

 - **Right alignment**: All comments align to the maximum indent position

   Before:
   ```
   int a = 1;             // test comment 1
   int b = 2;       // test comment 2
   int c = a + b;                    // test comment 3
   ```

   After:
   ```
   int a = 1;                        // test comment 1
   int b = 2;                        // test comment 2
   int c = a + b;                    // test comment 3
   ```

### Fixed
- Fixed right alignment calculation to ensure uniform comment positioning
- Resolved inconsistent spacing in multi-line comment blocks

## [0.0.1] - 2025-02-26

### Added
- Initial release
- Support for formatting comment indentation in multiple languages:
  - TypeScript/JavaScript (`//`, `/* */`)
  - Python (`#`)
  - Java (`//`, `/* */`)
  - C/C++ (`//`, `/* */`)
  - C# (`//`, `/* */`)
  - PHP (`//`, `#`, `/* */`)
  - Ruby (`#`)
  - Go (`//`, `/* */`)
  - Rust (`//`, `/* */`)
  - Swift (`//`, `/* */`)
  - SQL (`--`, `/* */`)
  - Gradle (Kotlin DSL) (`//`, `/* */`)
- Two comment alignment options:
  - Left alignment (minimum indentation)
  - Right alignment (maximum indentation)
- Multi-language support for command names:
  - English: "Align Comments Left", "Align Comments Right"
  - Japanese: "コメントを左揃えに整形", "コメントを右揃えに整形"
