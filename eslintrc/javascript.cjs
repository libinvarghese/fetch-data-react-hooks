const commonRules = require('./lib/common-rules.cjs');

module.exports = {
  extends: [
    './env.cjs',
    'eslint:recommended',
    './import.cjs',
    './no-secrets.cjs',
    './optimize-regex.cjs',
    './promise.cjs',
    './eslint-comments.cjs',
    './jsonc.cjs',
    './avoid-lodash.cjs',
    'prettier',
  ],
  overrides: [
    {
      files: ['eslintrc/*.cjs', 'eslintrc/*.json', 'eslintrc/*.jsonc', 'eslintrc/*.json5'],
      rules: {
        'jsonc/sort-keys': ['error', 'asc'],
        'sort-keys': ['error', 'asc'],
      },
    },
  ],
  rules: {
    ...commonRules,
    // eslint-disable-next-line no-magic-numbers -- Rarely used
    complexity: ['error', 4],
    'id-length': 'error',
    'no-console': 'warn',
    'no-extend-native': 'error',
    'no-implicit-coercion': ['error', { disallowTemplateShorthand: true }],
    'no-invalid-this': 'error',
    'no-loss-of-precision': 'error',
    'no-multi-assign': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': ['error', { hoist: 'all' }],
    'no-throw-literal': 'error',
    'no-unsafe-optional-chaining': 'error',
    'prefer-object-spread': 'error',
    radix: 'error',
  },
};
