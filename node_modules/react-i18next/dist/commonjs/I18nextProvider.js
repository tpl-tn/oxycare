"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18nextProvider = I18nextProvider;

var _react = require("react");

var _context = require("./context");

function I18nextProvider(_ref) {
  var i18n = _ref.i18n,
      defaultNS = _ref.defaultNS,
      children = _ref.children;
  return (0, _react.createElement)(_context.I18nContext.Provider, {
    value: {
      i18n: i18n,
      defaultNS: defaultNS
    }
  }, children);
}