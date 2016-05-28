## up-down-pad
Adds a given number of newline characters to *both* before and after a given string.

[![NPM Version][npm-image]][npm-url]

## Install

```bash
$ npm install up-down-pad
```

## Usage

```js
upDownPad = require('up-down-pad')

upDownPad('foo', 5)// => "\n\n\n\n\nfoo\n\n\n\n\n"

upPad('foobar', 6) // => "\n\n\n\n\n\nfoobar\n\n\n\n\n\n"

upPad(1, 2) // => "\n\n1\n\n"

upPad(20, -1) // => "20"
```

[npm-image]: https://img.shields.io/npm/v/up-pad.svg
[npm-url]: https://npmjs.org/package/up-down-pad
