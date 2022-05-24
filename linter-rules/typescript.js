module.exports = {
  // enforce the use of T[] if the T is a simple type
  '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],

  // explicit types for function return values. Maybe it is a bad idea but we
  // may want getting consensus on this
  '@typescript-eslint/explicit-function-return-type': 'off',

  // make accessibility explicit except for public constructors
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'explicit',
      overrides: {
        constructors: 'no-public',
      },
    },
  ],

  // prevent explicit any in the code
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',

  // make possible to use parameter properties in constructor
  '@typescript-eslint/no-parameter-properties': 'off',

  // prevent the use before define except for functions that are always hoisted
  '@typescript-eslint/no-use-before-define': ['error', { functions: false }],

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
  '@typescript-eslint/no-useless-constructor': 'error',

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksVoidReturn: true,
      checksConditionals: true,
    },
  ],

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
  '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }],
};
