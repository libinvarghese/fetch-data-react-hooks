'use strict';

module.exports = {
  extends: ['plugin:react/all', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'plugin:jsx-a11y/strict'],
  plugins: ['react-refresh'],
  rules: {
    'jsx-a11y/accessible-emoji': 'error',
    'jsx-a11y/anchor-ambiguous-text': 'error',
    'jsx-a11y/control-has-associated-label': 'error',
    'jsx-a11y/no-aria-hidden-on-focusable': 'error',
    'jsx-a11y/prefer-tag-over-role': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/jsx-max-depth': ['error', { max: 4 }],
    'react/jsx-no-literals': 'off', // TODO: Turn it on, wen using intl
  },
};
