module.exports = {
  // disallow using an async function as a Promise executor
  // https://eslint.org/docs/rules/no-async-promise-executor
  'no-async-promise-executor': 'off',

  // Disallow await inside of loops
  // https://eslint.org/docs/rules/no-await-in-loop
  'no-await-in-loop': 'error',

  // disallow unnecessary parentheses
  // https://eslint.org/docs/rules/no-extra-parens
  'no-extra-parens': [
    'off',
    'all',
    {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      enforceForArrowConditionals: false,
    },
  ],

  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  'no-template-curly-in-string': 'error',
};
