module.exports = {
  globals: {
    NodeJS: 'readonly',
  },
  overrides: [
    {
      files: ['*.js', '*.cjs', '*.mjs', '*.json', '*.jsonc', '*.json5'],
      extends: ['./eslintrc/javascript.cjs', './eslintrc/node.cjs'],
    },
    {
      files: ['*.ts', '*.ctx', '*.mtx'],
      extends: ['./eslintrc/javascript.cjs', './eslintrc/node.cjs', './eslintrc/typescript.cjs'],
    },
    {
      files: ['./src/**/*.js', '*.jsx', './src/**/*.cjx', './src/**/*.mjx'],
      extends: ['./eslintrc/javascript.cjs'],
    },
    {
      files: ['./src/**/*.ts', '*.tsx', './src/**/*.ctx', './src/**/*.mtx'],
      extends: ['./eslintrc/javascript.cjs', './eslintrc/typescript.cjs'],
    },
  ],
};
