# Pseudocode OCR

Opinionated syntax highlighter based off of the OCR Computer Science A-level [Specification](https://www.ocr.org.uk/images/170844-specification-accredited-a-level-gce-computer-science-h446.pdf#page=37).

This extension aims to improve the experience of students taking the OCR Computer Science A-level, by providing syntax highlighting for pseudocode written during the design section of the NEA.

It tries to stay faithful to the specification, but remains flexible by providing some generic highlighting for undocumentated syntax: e.g. block comments (`/* */`), bitwise operators (`XOR`, `LSHIFT`, `RSHIFT`), access modifiers (`protected`, `static`, `const`, `readonly`, `local`), if-statements (`elif`), control statements (`continue`, `break`), constants (`null`, `undefined`), keywords (`this`, `self`), for-statements (`each`, `in`), instance properties (`size`, `count`), exception handling (`try`, `catch`, `finally`, `throw`, `raise`, `endtry`)
