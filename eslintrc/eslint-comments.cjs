module.exports = {
  extends: ['plugin:eslint-comments/recommended'],
  rules: {
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-restricted-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-use': [
      'error',
      { allow: ['eslint-disable', 'eslint-enable', 'eslint-disable-line', 'eslint-disable-next-line', 'eslint'] },
    ],
    'eslint-comments/require-description': ['error', { ignore: ['eslint-enable'] }],
  },
};
