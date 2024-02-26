const { handledByPrettier } = require(`./handled-by-prettier.js`);

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: [`import`, `simple-import-sort`, `sort-destructure-keys`],

  rules: {
    ...handledByPrettier,

    camelcase: [
      `error`,
      {
        allow: [`^todo`, `child_process`, `npm_package_version`],
        properties: `never`,
      },
    ],

    // https://eslint.org/docs/rules/curly
    curly: [`error`, `all`],

    'import/consistent-type-specifier-style': [`error`, `prefer-top-level`],
    'import/extensions': [`error`, `ignorePackages`],
    'import/no-default-export': [`error`],
    'import/prefer-default-export': `off`,

    'no-await-in-loop': `off`,

    'no-console': [
      `error`,
      {
        allow: [`log`, `warn`, `error`, `table`],
      },
    ],

    'no-const-assign': `error`,
    'no-restricted-syntax': `off`,
    'no-underscore-dangle': [`error`, { allow: [`_id`] }],

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
      { blankLine: `always`, next: `continue`, prev: `*` },
      { blankLine: `always`, next: `return`, prev: `*` },
      { blankLine: `always`, next: `throw`, prev: `*` },
      { blankLine: `always`, next: `*`, prev: [`const`, `let`, `var`] },
      {
        blankLine: `any`,
        next: [`const`, `let`, `var`],
        prev: [`const`, `let`, `var`],
      },
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

    'simple-import-sort/exports': `error`,
    'simple-import-sort/imports': `error`,

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

module.exports = config;
