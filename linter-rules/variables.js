module.exports = {
  // disallow labels that share a name with a variable
  // https://eslint.org/docs/rules/no-label-var
  'no-label-var': 'error',

  // disallow declaration of variables already declared in the outer scope
  // There is Issue for this rules: https://github.com/typescript-eslint/tslint-to-eslint-config/issues/856
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": ["error"],

  // disallow use of undefined when initializing variables
  'no-undef-init': 'error',

  // disallow use of undefined variable
  // https://eslint.org/docs/rules/no-undefined
  'no-undefined': 'off',
};
