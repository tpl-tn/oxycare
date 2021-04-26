# ensure-array

Simple convenience function which ensures that you are dealing with an array and you can
eliminate noise from your code.

[![Build Status](https://secure.travis-ci.org/jeffbski/ensure-array.png?branch=master)](http://travis-ci.org/jeffbski/ensure-array)

For Example:

```javascript
  var array = require('ensure-array');

  function foo(bar) {
    array(bar).forEach(function (x) {
      //do something with each item
    });
  }
```

Instead of doing something like this:

```javascript
  function foo(bar) {
    if (bar === undefined) return;
    if (bar === null) return;
    if (!Array.isArray(bar)) bar = [bar];
    bar.forEach(function (x) {
      //do something with each item
    });
  }
```

## Description

It gets rid of the noise and coerces what is provided into an array, so you do not have to
litter your code with a bunch of extraneous checks.

Here is the logic behind the function:

 1. if nothing passed to the function return empty array []
 2. if single argument passed is undefined or null return empty array []
 3. if single argument passed is already an array, return it unchanged
 4. otherwise return array containing all of the arguments

Here is the actual code which makes it happen

 ```javascript
 module.exports = function array(a, b, n) {
  if (arguments.length === 0) return [];            //no args, ret []
  if (arguments.length === 1) {                     //single argument
    if (a === undefined || a === null) return [];   //  undefined or null, ret []
    if (Array.isArray(a)) return a;                 //  isArray, return it
  }
  return Array.prototype.slice.call(arguments);     //return array with copy of all arguments
};
```

## Installation

```bash
  npm install ensure-array
```


## Usage

```javascript
  var array = require('ensure-array');  // get handle to the function
  var foo = array(whatever);               // foo will now safely be an array
```


## Status

 - 2017-11-02 - 1.0.0  - Modernized by @Zertz
 - 2011-12-08 - 0.0.4  - Update tapr / tap versions
 - 2011-12-01 - 0.0.3  - Updated to support any version of Node.js


## License

 - [MIT license](http://github.com/jeffbski/ensure-array/raw/master/LICENSE)

## Contributors

 - Author: Jeff Barczewski (@jeffbski)
 - Modernized on 2017-11-02 by Pier-Luc Gendreau (@Zertz)

## Contributing

 - Source code repository: http://github.com/jeffbski/ensure-array
 - Ideas and pull requests are encouraged  - http://github.com/jeffbski/ensure-array/issues
 - You may contact me at @jeffbski or through github at http://github.com/jeffbski
