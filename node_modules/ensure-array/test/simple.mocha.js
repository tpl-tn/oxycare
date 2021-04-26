'use strict';

var chai = require('chai');
var ensureArray = require('../ensure-array.js');

(function () {

  var t = chai.assert;

  suite('simple-tests');

  test('empty arg list becomes empty array', function (done) {
    var result = ensureArray();
    t.deepEqual(result, [], 'should be empty array');
    done();
  });

  test('undefined single argument becomes empty array', function (done) {
    var result = ensureArray(undefined);
    t.deepEqual(result, [], 'should be empty array');
    done();
  });

  test('null single argument becomes empty array', function (done) {
    var result = ensureArray(null);
    t.deepEqual(result, [], 'should be empty array');
    done();
  });

  test('array single argument returns itself unchanged', function (done) {
    var result = ensureArray([1, 2, 3]);
    t.deepEqual(result, [1, 2, 3]);
    done();
  });

  test('single argument non-array becomes an array containing itself', function (done) {
    var result = ensureArray(10);
    t.deepEqual(result, [10]);
    done();
  });

  test('undefined argument as first of many arguments returns array of all args', function (done) {
    var result = ensureArray(undefined, 1, 'two');
    t.deepEqual(result, [undefined, 1, 'two']);
    done();
  });

  test('null argument as first of many arguments returns array of all args', function (done) {
    var result = ensureArray(null, 1, 'two');
    t.deepEqual(result, [null, 1, 'two']);
    done();
  });

}());

