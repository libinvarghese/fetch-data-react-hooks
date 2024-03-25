const commonRules = require('./lib/common-rules.cjs');
const projects = require('./lib/projects.cjs');

const booleanVarPrefix = ['is', 'should', 'has', 'can', 'did', 'will'];

const booleanVariable = {
  format: ['StrictPascalCase'],
  prefix: booleanVarPrefix,
  types: ['boolean'],
};

const booleanGlobalUpperCaseConst = {
  filter: {
    match: true,
    regex: '^[A-Z0-9_]+',
  },
  format: ['UPPER_CASE'],
  prefix: booleanVarPrefix.map(prefix => `${prefix.toUpperCase()}_`),
  types: ['boolean'],
};

const staticReadonlyMember = {
  format: ['UPPER_CASE'],
  modifiers: ['static', 'readonly'],
  selector: 'memberLike',
};

const variableConstGlobal = {
  format: ['strictCamelCase', 'UPPER_CASE'],
  modifiers: ['const', 'global'],
  selector: 'variable',
};

const namingRules = [
  /* eslint-disable sort-keys -- format should be last */
  { selector: 'default', format: ['strictCamelCase'] },
  {
    selector: 'import',
    format: ['strictCamelCase', 'StrictPascalCase'],
  },
  // variableConst,
  {
    selector: 'variable',
    modifiers: ['const'],
    filter: {
      regex: '^[A-Z][a-z]',
      match: true,
    },
    format: ['StrictPascalCase'],
    suffix: ['Model', 'Class', 'Schema'],
  },
  variableConstGlobal,
  {
    ...variableConstGlobal,
    ...booleanGlobalUpperCaseConst,
  },
  {
    selector: 'variable',
    ...booleanVariable,
  },
  {
    selector: 'parameter',
    format: ['strictCamelCase'],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'parameter',
    ...booleanVariable,
    leadingUnderscore: 'allow',
  },
  {
    // Schema for stuctured data
    selector: 'property',
    format: [],
    custom: {
      regex: '^@(id|context|type|graph)$',
      match: true,
    },
    filter: {
      regex: '^@',
      match: true,
    },
  },
  staticReadonlyMember,
  {
    ...staticReadonlyMember,
    selector: 'property',
    ...booleanGlobalUpperCaseConst,
  },
  {
    selector: 'memberLike',
    modifiers: ['private'],
    leadingUnderscore: 'require',
    format: ['strictCamelCase'],
  },
  {
    selector: 'typeLike',
    format: ['StrictPascalCase'],
  },
  {
    selector: 'enumMember',
    format: ['StrictPascalCase', 'UPPER_CASE'],
  },
];

const namingRulesTsx = [
  ...namingRules,
  {
    selector: 'function',
    format: ['StrictPascalCase', 'strictCamelCase'],
  },
];
/* eslint-enable sort-keys */

const config = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/all',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/naming-convention': ['error', ...namingRulesTsx],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    project: projects,
    sourceType: 'module',
  },
  rules: {
    ...Object.keys(commonRules).reduce((rules, key) => {
      rules[`@typescript-eslint/${key}`] = commonRules[key];

      return rules;
    }, {}),
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/naming-convention': ['error', ...namingRules],
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignore: [0, 1],
        ignoreArrayIndexes: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: false,
        ignoreReadonlyClassProperties: false,
      },
    ],
    '@typescript-eslint/no-type-alias': [
      'error',
      {
        allowAliases: 'in-unions-and-intersections',
        allowCallbacks: 'always',
      },
    ],
    '@typescript-eslint/parameter-properties': ['error', { prefer: 'parameter-property' }],
    '@typescript-eslint/prefer-readonly-parameter-types': ['error', { ignoreInferredTypes: true }],
  },
};

module.exports = config;
