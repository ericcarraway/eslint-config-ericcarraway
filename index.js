const { handledByPrettier } = require(`./handled-by-prettier.js`);

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      files: [
        // Next.js API routes.
        `*.handler.ts`,

        // Next.js pages.
        `*.page.tsx`,

        // Storybook stories.
        `*.stories.tsx`,
      ],
      rules: {
        'import/no-default-export': `off`,
      },
    },
  ],

  plugins: [
    `import`,
    `simple-import-sort`,
    `sort-destructure-keys`,
    `@typescript-eslint/eslint-plugin`,
  ],

  rules: {
    ...handledByPrettier,

    '@typescript-eslint/array-type': `error`,
    '@typescript-eslint/ban-types': `error`,

    '@typescript-eslint/consistent-type-imports': [
      `error`,
      { fixStyle: `separate-type-imports`, prefer: `type-imports` },
    ],

    '@typescript-eslint/no-duplicate-enum-values': `error`,
    '@typescript-eslint/no-extra-non-null-assertion': `error`,
    '@typescript-eslint/no-misused-new': `error`,
    '@typescript-eslint/no-namespace': `error`,
    '@typescript-eslint/no-non-null-asserted-optional-chain': `error`,
    '@typescript-eslint/no-this-alias': `error`,
    '@typescript-eslint/no-unnecessary-type-constraint': `error`,
    '@typescript-eslint/no-unsafe-declaration-merging': `error`,
    '@typescript-eslint/prefer-as-const': `error`,
    '@typescript-eslint/prefer-for-of': `error`,
    '@typescript-eslint/prefer-literal-enum-member': `error`,
    '@typescript-eslint/triple-slash-reference': `error`,

    'accessor-pairs': [
      `error`,
      {
        enforceForClassMembers: true,
        getWithoutSet: false,
        setWithoutGet: true,
      },
    ],
    camelcase: [
      `error`,
      {
        allow: [`^todo`, `child_process`, `npm_package_version`],
        properties: `never`,
      },
    ],

    // https://eslint.org/docs/rules/curly
    curly: [`error`, `all`],

    'func-name-matching': [
      `error`,
      {
        considerPropertyDescriptor: true,
      },
    ],

    'grouped-accessor-pairs': [`error`, `getBeforeSet`],

    'import/consistent-type-specifier-style': [`error`, `prefer-top-level`],
    'import/extensions': [`error`, `ignorePackages`],
    'import/no-default-export': [`error`],

    'import/no-extraneous-dependencies': [
      `error`,
      {
        devDependencies: [
          `**/*.spec.js`,
          `**/*.spec.ts`,
          `**/*.test.js`,
          `**/*.test.ts`,
        ],
      },
    ],

    'import/prefer-default-export': `off`,

    'max-depth': [`warn`, 4],
    'max-nested-callbacks': [`warn`, 4],

    'max-params': [
      `warn`,
      {
        max: 4,
      },
    ],

    'max-statements-per-line': [
      `error`,
      {
        max: 1,
      },
    ],

    'no-array-constructor': `error`,
    'no-await-in-loop': `off`,

    'no-console': [
      `error`,
      {
        allow: [`log`, `warn`, `error`, `table`],
      },
    ],

    'no-const-assign': `error`,
    'no-constant-binary-expression': [`error`],
    'no-constant-condition': [`error`],
    'no-delete-var': `error`,
    'no-empty-static-block': [`error`],
    'no-eq-null': [`error`],

    'no-implicit-coercion': [
      `error`,
      {
        allow: [],
        boolean: false,
        number: true,
        string: true,
      },
    ],
    'no-implicit-globals': [`error`],

    'no-label-var': `error`,
    'no-lonely-if': `error`,
    'no-negated-condition': `error`,
    'no-new-native-nonconstructor': [`error`],
    'no-object-constructor': [`error`],
    'no-restricted-syntax': `off`,
    'no-shadow-restricted-names': `error`,
    'no-undef-init': `error`,
    'no-underscore-dangle': [`error`, { allow: [`_id`] }],

    'no-unmodified-loop-condition': [`error`],

    'no-unused-vars': [
      `error`,
      {
        // Prefix unused variables with "unused"
        // followed by a capital letter.
        args: `all`,
        argsIgnorePattern: `^unused[A-Z].*$`,
        caughtErrors: `all`,
        caughtErrorsIgnorePattern: `^unused[A-Z].*$`,
        vars: `all`,
        varsIgnorePattern: `^unused[A-Z].*$`,
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

    'no-useless-call': [`error`],

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

    'prefer-object-has-own': `error`,
    'prefer-object-spread': `error`,

    quotes: [`error`, `backtick`],

    'require-await': `error`,

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
