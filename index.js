module.exports = {
  rules: {
    // https://eslint.org/docs/rules/curly
    curly: ['error', 'all'],

    'no-const-assign': 'error',

    // hoisted functions (in the form of function
    // declarations) are useful since they allow us to push
    // cluttering implementation details away from (below)
    // the usage of a function
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],

    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],

    quotes: ['error', 'backtick'],

    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: false, minKeys: 2, natural: true },
    ],

    // https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': ['error', 'inside'],
  },
};
