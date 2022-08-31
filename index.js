const { handledByPrettier } = require(`./handled-by-prettier.js`);

module.exports = {
  plugins: [`import`, `sort-destructure-keys`],

  rules: {
    ...handledByPrettier,

    // https://eslint.org/docs/rules/curly
    curly: [`error`, `all`],

    'import/extensions': [`error`, `ignorePackages`],
    'import/no-default-export': [`error`],
    'import/prefer-default-export': `off`,
    'newline-after-var': [`error`, `always`],
    'no-await-in-loop': `off`,
    'no-const-assign': `error`,
    'no-restricted-syntax': `off`,

    'no-unused-vars': [
      `error`,
      {
        // prefix unused variables with "unused"
        // followed by a capital letter
        args: `all`,
        argsIgnorePattern: `^unused($|[A-Z].*$)`,
        caughtErrors: `all`,
        caughtErrorsIgnorePattern: `^unused($|[A-Z].*$)`,
        vars: `all`,
        varsIgnorePattern: `^unused($|[A-Z].*$)`,
      },
    ],

    // hoisted functions (in the form of function
    // declarations) are useful since they allow us to push
    // cluttering implementation details away from (below)
    // the usage of a function
    'no-use-before-define': [
      `error`,
      {
        functions: false,
      },
    ],

    'padding-line-between-statements': [
      `error`,
      { blankLine: `always`, next: `return`, prev: `*` },
      { blankLine: `always`, next: `throw`, prev: `*` },
    ],

    'prefer-destructuring': [
      `error`,
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    quotes: [`error`, `backtick`],

    'sort-destructure-keys/sort-destructure-keys': [
      `error`,
      { caseSensitive: false },
    ],

    'sort-keys': [
      `error`,
      `asc`,
      { caseSensitive: false, minKeys: 2, natural: true },
    ],
  },
};
