# Pseudocode OCR

Syntax highlighter and opinionated superset of the OCR A-level Computer Science [Specification](https://www.ocr.org.uk/images/170844-specification-accredited-a-level-gce-computer-science-h446.pdf#page=37).

This extension aims to enhance the experience of students taking the OCR A-level Computer Science course by providing syntax highlighting for pseudocode written in the design section of the NEA (Non-Exam Assessment.)

This extension supports `.pseudo`, `.pseudocode` and `.ocr` file extensions.

While pseudocode often isn't used in industry, it is an essential component of the NEA. This extension makes writing and reading pseudocode more pleasant and structured.

## Extended Syntax

You can disable the extended syntax by typing `// strict` at the top of a file. This will only highlight valid OCR exam reference language.

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

Code snippets are supported for core programming constructs.

## Disclamer

-   I am not affiliated with OCR (Oxford Cambridge and RSA Examinations)
-   I am a student studying OCR A-level Computer Science
-   This extension is an unofficial tool created to help fellow students
-   Please refer to the official OCR specification for correct exam pseudocode syntax
-   This extension is provided as-is for educational purposes
