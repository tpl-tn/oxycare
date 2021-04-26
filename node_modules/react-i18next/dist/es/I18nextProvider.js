import { createElement } from 'react';
import { I18nContext } from './context';
export function I18nextProvider(_ref) {
  var i18n = _ref.i18n,
      defaultNS = _ref.defaultNS,
      children = _ref.children;
  return createElement(I18nContext.Provider, {
    value: {
      i18n: i18n,
      defaultNS: defaultNS
    }
  }, children);
}