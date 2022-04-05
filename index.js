module.exports = {
  plugins: [`import`, `sort-destructure-keys`],

  rules: {
    // https://eslint.org/docs/rules/curly
    curly: [`error`, `all`],

    'function-paren-newline': `off`,
    'implicit-arrow-linebreak': `off`,

    'import/extensions': [`error`, `ignorePackages`],
    'import/no-default-export': [`error`],
    'import/prefer-default-export': `off`,

    indent: [`error`, 2, { SwitchCase: 1 }],

    // https://github.com/prettier/eslint-config-prettier/blob/main/index.js
    'newline-per-chained-call': `off`,

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

    'object-curly-newline': `off`,

    'operator-linebreak': [
      `error`,
      `after`,
      {
        overrides: {
          ':': `before`,
          '?': `before`,
        },
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

    // https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': [`error`, `inside`],
  },
};
