module.exports = {
    root: true,
    env: {
      browser: true,
      es6: true,
      'jest/globals': true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/typescript',
      'plugin:jest/recommended',
      'prettier',
      'prettier/@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.eslint.json',
      ecmaVersion: 2018,
      sourceType: 'module',
      noWatch: true,
    },
    plugins: ['@typescript-eslint', 'import', 'jest', 'prettier'],
    rules: {
      ...require('./linter-rules/best-practices'),
      ...require('./linter-rules/errors'),
      ...require('./linter-rules/es6'),
      ...require('./linter-rules/imports'),
      ...require('./linter-rules/node'),
      ...require('./linter-rules/typescript'),
      ...require('./linter-rules/variables'),
    },
    settings: {
      'import/ignore': ['node_modules'],
      'import/parser': {
        '@typescript-eslint/parser': ['.ts'],
      },
      'import/resolver': {
        node: {},
        typescript: {},
      },
    },
  };
  