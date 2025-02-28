export const baseRules = {
  /** @see https://eslint.org/docs/latest/rules/accessor-pairs */
  'accessor-pairs': [
    `error`,
    {
      enforceForClassMembers: true,
      getWithoutSet: false,
      setWithoutGet: true,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/camelcase */
  camelcase: [
    `error`,
    {
      allow: [
        `^todo`,
        `child_process`,
        `npm_package_version`,
        `unstable_cache`,
      ],
      properties: `never`,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/curly */
  curly: [`error`, `all`],

  /** @see https://eslint.org/docs/latest/rules/func-name-matching */
  'func-name-matching': [
    `error`,
    {
      considerPropertyDescriptor: true,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/grouped-accessor-pairs */
  'grouped-accessor-pairs': [`error`, `getBeforeSet`],

  /** @see https://eslint.org/docs/latest/rules/max-depth */
  'max-depth': [`warn`, 4],

  /** @see https://eslint.org/docs/latest/rules/max-nested-callbacks */
  'max-nested-callbacks': [`warn`, 4],

  /** @see https://eslint.org/docs/latest/rules/max-params */
  'max-params': [
    `warn`,
    {
      max: 4,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-array-constructor */
  'no-array-constructor': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-console */
  'no-console': [
    `error`,
    {
      allow: [`log`, `warn`, `error`, `table`],
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-const-assign */
  'no-const-assign': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-constant-binary-expression */
  'no-constant-binary-expression': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-constant-condition */
  'no-constant-condition': [`error`, { checkLoops: `allExceptWhileTrue` }],

  /** @see https://eslint.org/docs/latest/rules/no-delete-var */
  'no-delete-var': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-else-return */
  'no-else-return': [`error`, { allowElseIf: false }],

  /** @see https://eslint.org/docs/latest/rules/no-empty-static-block */
  'no-empty-static-block': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-eq-null */
  'no-eq-null': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-implicit-coercion */
  'no-implicit-coercion': [
    `error`,
    {
      allow: [],
      boolean: false,
      number: true,
      string: true,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-implicit-globals */
  'no-implicit-globals': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-label-var */
  'no-label-var': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-lonely-if */
  'no-lonely-if': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-negated-condition */
  'no-negated-condition': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-new-native-nonconstructor */
  'no-new-native-nonconstructor': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-object-constructor */
  'no-object-constructor': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-shadow-restricted-names */
  'no-shadow-restricted-names': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-undef-init */
  'no-undef-init': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-underscore-dangle */
  'no-underscore-dangle': [`error`, { allow: [`_id`] }],

  /** @see https://eslint.org/docs/latest/rules/no-unmodified-loop-condition */
  'no-unmodified-loop-condition': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-use-before-define */
  'no-use-before-define': [
    `error`,
    {
      functions: false,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-useless-call */
  'no-useless-call': `error`,

  /** @see https://eslint.org/docs/latest/rules/prefer-destructuring */
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

  /** @see https://eslint.org/docs/latest/rules/prefer-object-has-own */
  'prefer-object-has-own': `error`,

  /** @see https://eslint.org/docs/latest/rules/prefer-object-spread */
  'prefer-object-spread': `error`,

  /** @see https://eslint.org/docs/latest/rules/require-await */
  'require-await': `error`,

  /** @see https://eslint.org/docs/latest/rules/sort-keys */
  'sort-keys': [
    `error`,
    `asc`,
    { caseSensitive: false, minKeys: 2, natural: true },
  ],
};

export const disabledBaseRules = {
  /** @see https://eslint.org/docs/latest/rules/no-await-in-loop */
  'no-await-in-loop': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-restricted-syntax */
  'no-restricted-syntax': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-unused-vars */
  'no-unused-vars': `off`,
};

export const importRules = {
  'import/consistent-type-specifier-style': [`error`, `prefer-top-level`],
  'import/default': `error`,
  'import/export': `error`,
  'import/named': `error`,
  'import/namespace': `error`,
  'import/no-default-export': [`error`],
  'import/no-duplicates': `warn`,
  'import/no-extraneous-dependencies': [
    `error`,
    {
      devDependencies: [
        `**/*.spec.js`,
        `**/*.spec.ts`,
        `**/*.test.js`,
        `**/*.test.ts`,
        `**/eslint.config.js`,
        `**/eslint.config.mjs`,
      ],
    },
  ],
  'import/no-named-as-default': `warn`,
  'import/no-named-as-default-member': `warn`,
  'import/no-unresolved': `error`,
  'import/prefer-default-export': `off`,
};

export const simpleImportSortRules = {
  'simple-import-sort/exports': `error`,
  'simple-import-sort/imports': `error`,
};

export const stylisticRules = {
  '@stylistic/max-statements-per-line': [
    `error`,
    {
      max: 1,
    },
  ],
  '@stylistic/padding-line-between-statements': [
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
  '@stylistic/quotes': [`error`, `backtick`],
  '@stylistic/semi': [`error`, `always`],
};

export const typescriptRules = {
  '@typescript-eslint/array-type': `error`,
  '@typescript-eslint/ban-ts-comment': `warn`,
  '@typescript-eslint/consistent-type-definitions': `off`,
  '@typescript-eslint/consistent-type-imports': [
    `error`,
    { fixStyle: `separate-type-imports`, prefer: `type-imports` },
  ],
  '@typescript-eslint/no-duplicate-enum-values': `error`,
  '@typescript-eslint/no-empty-object-type': `warn`,
  '@typescript-eslint/no-explicit-any': `off`,
  '@typescript-eslint/no-extra-non-null-assertion': `error`,
  '@typescript-eslint/no-misused-new': `error`,
  '@typescript-eslint/no-namespace': `error`,
  '@typescript-eslint/no-non-null-asserted-optional-chain': `error`,
  '@typescript-eslint/no-this-alias': `error`,
  '@typescript-eslint/no-unnecessary-type-constraint': `error`,
  '@typescript-eslint/no-unsafe-declaration-merging': `error`,
  '@typescript-eslint/no-unused-vars': [
    `error`,
    {
      args: `all`,
      argsIgnorePattern: `^unused[A-Z].*$`,
      caughtErrors: `all`,
      caughtErrorsIgnorePattern: `^unused[A-Z].*$`,
      destructuredArrayIgnorePattern: `^unused[A-Z].*$`,
      ignoreRestSiblings: false,
      vars: `all`,
      varsIgnorePattern: `^unused[A-Z].*$`,
    },
  ],
  '@typescript-eslint/prefer-as-const': `error`,
  '@typescript-eslint/prefer-for-of': `error`,
  '@typescript-eslint/prefer-literal-enum-member': `error`,
  '@typescript-eslint/triple-slash-reference': `error`,
};
