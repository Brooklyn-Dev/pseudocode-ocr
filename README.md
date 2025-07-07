# Pseudocode OCR

![Visual Studio Code](https://img.shields.io/badge/VS%20Code-Extension-blue)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/BrooklynDev.pseudocode-ocr)
![GitHub Issues](https://img.shields.io/github/issues/Brooklyn-Dev/pseudocode-ocr)
![License](https://img.shields.io/badge/license-MIT-green)

Syntax highlighter and opinionated superset of the OCR A-level Computer Science [Specification](https://www.ocr.org.uk/images/170844-specification-accredited-a-level-gce-computer-science-h446.pdf#page=37).

Made for Hack Club's YSWS [Extensify](https://extensify.hackclub.com/).

<img src="icon.png" alt="Logo" style="display: block; margin: 0 auto;"/>

This extension aims to enhance the experience of students taking the OCR A-level Computer Science course by providing syntax highlighting for pseudocode written in the design section of the NEA (Non-Exam Assessment.)

-   Use the `.ocr` file extension to disable the extended syntax. This will only highlight valid OCR exam reference language.
-   Use `.pseudo` or `.pseudocode` file extensions to enable extended syntax highlighting

While pseudocode often isn't used in industry, it is an essential component of the NEA. This extension makes writing and reading pseudocode more pleasant and structured.

## Extended Syntax

Syntax stays faithful to the offical OCR exam reference language, while introducing practical extensions for real-world design and NEA coursework, which are:

-   Extended number system: binary, octal, hexadecimal, scientific notation
-   Block comments: `/* */`
-   Bitwise operators: `XOR`, `LSHIFT`, `RSHIFT`
-   Access modifiers: `protected`, `static`, `const`, `readonly`, `local`, `abstract`
-   Extended conditionals: `elif`
-   Control flow: `continue`, `break`
-   Constants and values: `null`, `undefined`
-   Object references: `this`, `self`
-   Iterative constructs: `each`, `in`
-   Instance properties: `size`, `count`
-   Exception handling: `try`, `catch`, `finally`, `throw`, `raise`, `endtry`
-   Concurrency: `async`, `await`
-   Data structures: `struct`, `endstruct`, `enum`, `endenum`, `interface`, `endinterface`, `implements`

## Snippets

Code snippets are only supported for core programming constructs.

-   Classes: `class`, `classinherits`
-   Condition-controlled iteration: `while`, `do`
-   Count-controlled iteration: `for`, `forstep`, `foreach`
-   Subroutines: `procedure`, `function`
-   Selection: `if`, `ifelse`, `ifelseif`, `switch`

## Disclamer

-   I am not affiliated with OCR (Oxford Cambridge and RSA Examinations)
-   I am a student studying OCR A-level Computer Science
-   This extension is an unofficial tool created to help fellow students
-   Please refer to the official OCR specification for correct exam pseudocode syntax
-   This extension is provided as-is for educational purposes

## Like this project?

If you find this project interesting or useful, consider giving it a star ⭐️!

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.
