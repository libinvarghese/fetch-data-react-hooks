module.exports = {
  extends: ['plugin:n/recommended'],
  rules: {
    'n/callback-return': 'error',
    'n/exports-style': ['error', 'module.exports'],
    // This is buggy 'n/file-extension-in-import': ['error', 'never'],
    // use 'import/extensions' instead
    'n/global-require': 'error',
    'n/handle-callback-err': 'error',
    'n/no-callback-literal': 'error',
    'n/no-missing-import': 'off', // use eslint-plugin-import
    'n/no-mixed-requires': 'error',
    // 'n/no-hide-core-modules' - deprecated
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/no-process-env': 'error',
    'n/no-restricted-import': 'error',
    'n/no-restricted-require': 'error',
    'n/no-sync': 'error',
    'n/no-unpublished-import': [
      'error',
      {
        ignoreTypeImport: true,
      },
    ],
    // 'n/no-unsupported-features/node-builtins': [
    //   'error',
    //   {
    //     ignores: ['fs.promises', 'stream.Readable.from'],
    //     version: '>=10.19.0',
    //   },
    // ],
    'n/prefer-global/buffer': ['error', 'never'],
    'n/prefer-global/console': ['error', 'always'],
    'n/prefer-global/process': ['error', 'never'],
    'n/prefer-global/text-decoder': ['error', 'never'],
    'n/prefer-global/text-encoder': ['error', 'never'],
    'n/prefer-global/url': ['error', 'never'],
    'n/prefer-global/url-search-params': ['error', 'never'],
    // 'n/prefer-node-protocol': 'error', Uncomment when updated to v17
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',
    // 'n/shebang' deprecated
  },
};
