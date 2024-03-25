module.exports = {
  extends: ['plugin:jsonc/all', 'plugin:jsonc/prettier'],
  overrides: [
    {
      files: ['package.json'],
      rules: {
        'jsonc/key-name-casing': [
          'error',
          {
            camelCase: true,
            ignores: ['^[a-z\\d]+:', '^@.*$', 'TODO'],
            'kebab-case': true,
          },
        ],
      },
    },
    {
      files: ['license-checker-config.json'],
      rules: {
        'jsonc/key-name-casing': [
          'error',
          {
            camelCase: true,
            ignores: ['^([a-z\\d]+\\|)*[a-z\\d]+$'],
          },
        ],
      },
    },
    // Incase there are json files which are actual jsonc or json5, add here
    {
      files: ['tsconfig*.json', '*.json5', '*.jsonc'],
      rules: {
        'jsonc/no-comments': 'off',
      },
    },
    {
      files: ['amplifyconfiguration.json'],
      rules: {
        'jsonc/key-name-casing': [
          'error',
          {
            camelCase: true,
            ignores: ['^aws_'],
          },
        ],
      },
    },
    {
      files: ['amplify/backend/function/**/events/*.json'],
      rules: {
        'jsonc/key-name-casing': 'off',
      },
    },
    // {
    //   files: ['*.json'],
    //   rules: {
    //     'semi': 'off',
    //   },
    // },
  ],
  rules: {
    'jsonc/sort-keys': 'off',
  },
};
