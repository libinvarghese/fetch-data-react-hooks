module.exports = {
  extends: ['plugin:import/errors', 'plugin:import/typescript'],
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': ['error', { target: 'any' }],
      },
    },
  ],
  rules: {
    'import/exports-last': 'error',
    'import/extensions': ['error', 'never', { svg: 'always' }],
    'import/first': 'error',
    // 'import/named': 'error', -- turned off in plugin:import/typescript
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-cycle': 'error',
    'import/no-default-export': 'error',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': ['error', { allow: ['**/*.css'] }],
    'import/no-unresolved': 'off', // Since import-plugin does not work well with tsconfig path alias
    'import/no-unused-modules': [
      'error',
      // { unusedExports: true }  // Since import-plugin does not work well with tsconfig path alias
    ],
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': ['error', { 'newlines-between': 'never' }],
    // The below is same as 'node/no-unpublished-import'
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   { devDependencies: false, optionalDependencies: false, peerDependencies: false },
    // ],
    // The below is same as 'node/global-require',
    // 'import/no-dynamic-require': 'error',
  },
};
