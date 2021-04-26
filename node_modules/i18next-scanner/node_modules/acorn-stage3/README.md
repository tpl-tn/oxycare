# stage 3 proposal support for Acorn

[![NPM version](https://img.shields.io/npm/v/acorn-stage3.svg)](https://www.npmjs.org/package/acorn-stage3)

This is a plugin for [Acorn](http://marijnhaverbeke.nl/acorn/) - a tiny, fast JavaScript parser, written completely in JavaScript.

It implements support for many current and former [ECMAScript stage 3 proposals](https://github.com/tc39/proposals/blob/master/README.md#stage-3); not implemented are nullish-coalescing and optional-chaining. Neither loose mode nor walk are currently supported.

- [import()](https://github.com/tc39/proposal-dynamic-import) ([ESTree](https://github.com/estree/estree/blob/master/experimental/import-expression.md)) via [acorn-dynamic-import](https://www.npmjs.com/package/acorn-dynamic-import)
- [BigInt: Arbitrary precision integers in JavaScript](https://github.com/tc39/proposal-bigint) ([ESTree](https://github.com/estree/estree/pull/179)) via [acorn-bigint](https://www.npmjs.org/package/acorn-bigint)
- [Numeric Separators](https://github.com/tc39/proposal-numeric-separator) via [acorn-numeric-separator](https://www.npmjs.org/package/acorn-numeric-separator)
- [import.meta](https://github.com/tc39/proposal-import-meta) via [acorn-import-meta](https://www.npmjs.org/package/acorn-import-meta)
- [Class field declarations](https://github.com/tc39/proposal-class-fields) via [acorn-class-fields](https://www.npmjs.org/package/acorn-class-fields)
- [Private methods and getter/setters for JavaScript classes](https://github.com/tc39/proposal-private-methods) via [acorn-private-methods](https://www.npmjs.org/package/acorn-private-methods)
- [Static class features](https://github.com/tc39/proposal-static-class-features) via [acorn-static-class-features](https://www.npmjs.org/package/acorn-static-class-features)
- [Add \`export * as ns from "mod"\` to Export production and Module Semantic](https://github.com/tc39/ecma262/pull/1174) via [acorn-export-ns-from](https://www.npmjs.org/package/acorn-export-ns-from)
- [Logical assignments](https://github.com/tc39/proposal-logical-assignment) via [acorn-logical-assignment](https://github.com/acornjs/acorn-logical-assignment)

## Usage

This module provides a plugin that can be used to extend the Acorn `Parser` class:

```javascript
const {Parser} = require('acorn');
const stage3 = require('acorn-stage3');
Parser.extend(stage3).parse('100n');
```

## License

This plugin is released under an [MIT License](./LICENSE).
