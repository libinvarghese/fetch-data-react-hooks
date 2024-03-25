module.exports = {
  extends: ['plugin:promise/recommended'],
  rules: {
    'promise/avoid-new': 'error',
    'promise/catch-or-return': ['error', { allowFinally: true }],
  },
};
