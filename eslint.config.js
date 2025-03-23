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

  /** @see https://eslint.org/docs/latest/rules/array-callback-return */
  'array-callback-return': [
    `error`,
    {
      allowImplicit: true,
      allowVoid: false,
      checkForEach: false,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/arrow-body-style */
  'arrow-body-style': [
    `error`,
    `as-needed`,
    {
      requireReturnForObjectLiteral: false,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/block-scoped-var */
  'block-scoped-var': `error`,

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

  /** @see https://eslint.org/docs/latest/rules/constructor-super */
  'constructor-super': `error`,

  /** @see https://eslint.org/docs/latest/rules/curly */
  curly: [`error`, `all`],

  /** @see https://eslint.org/docs/latest/rules/default-case */
  'default-case': [
    `error`,
    {
      commentPattern: `^no default$`,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/default-case-last */
  'default-case-last': `error`,

  /** @see https://eslint.org/docs/latest/rules/eqeqeq */
  eqeqeq: [
    `error`,
    `always`,
    {
      null: `always`,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/for-direction */
  'for-direction': `error`,

  /** @see https://eslint.org/docs/latest/rules/func-name-matching */
  'func-name-matching': [
    `error`,
    {
      considerPropertyDescriptor: true,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/func-names */
  'func-names': `warn`,

  /** @see https://eslint.org/docs/latest/rules/func-style */
  'func-style': [`off`, `expression`],

  /** @see https://eslint.org/docs/latest/rules/getter-return */
  'getter-return': [
    `error`,
    {
      allowImplicit: true,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/grouped-accessor-pairs */
  'grouped-accessor-pairs': [`error`, `getBeforeSet`],

  /** @see https://eslint.org/docs/latest/rules/guard-for-in */
  'guard-for-in': `error`,

  /** @see https://eslint.org/docs/latest/rules/max-classes-per-file */
  'max-classes-per-file': [`error`, 1],

  /** @see https://eslint.org/docs/latest/rules/max-depth */
  'max-depth': [`warn`, 4],

  /** @see https://eslint.org/docs/latest/rules/max-nested-callbacks */
  'max-nested-callbacks': [`warn`, 4],

  /** @see https://eslint.org/docs/latest/rules/new-cap */
  'new-cap': [
    `error`,
    {
      capIsNew: false,
      capIsNewExceptions: [`Immutable.Map`, `Immutable.Set`, `Immutable.List`],
      newIsCap: true,
      newIsCapExceptions: [],
      properties: true,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-alert */
  'no-alert': `warn`,

  /** @see https://eslint.org/docs/latest/rules/no-async-promise-executor */
  'no-async-promise-executor': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-bitwise */
  'no-bitwise': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-buffer-constructor */
  'no-buffer-constructor': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-caller */
  'no-caller': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-case-declarations */
  'no-case-declarations': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-class-assign */
  'no-class-assign': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-compare-neg-zero */
  'no-compare-neg-zero': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-cond-assign */
  'no-cond-assign': [`error`, `always`],

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

  /** @see https://eslint.org/docs/latest/rules/no-constructor-return */
  'no-constructor-return': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-control-regex */
  'no-control-regex': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-debugger */
  'no-debugger': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-delete-var */
  'no-delete-var': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-dupe-args */
  'no-dupe-args': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-dupe-else-if */
  'no-dupe-else-if': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-dupe-keys */
  'no-dupe-keys': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-duplicate-case */
  'no-duplicate-case': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-else-return */
  'no-else-return': [
    `error`,
    {
      allowElseIf: false,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-empty */
  'no-empty': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-empty-character-class */
  'no-empty-character-class': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-empty-pattern */
  'no-empty-pattern': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-empty-static-block */
  'no-empty-static-block': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-eq-null */
  'no-eq-null': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-eval */
  'no-eval': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-ex-assign */
  'no-ex-assign': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-extend-native */
  'no-extend-native': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-extra-bind */
  'no-extra-bind': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-extra-boolean-cast */
  'no-extra-boolean-cast': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-extra-label */
  'no-extra-label': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-fallthrough */
  'no-fallthrough': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-func-assign */
  'no-func-assign': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-global-assign */
  'no-global-assign': [
    `error`,
    {
      exceptions: [],
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-implicit-coercion */
  'no-implicit-coercion': [
    `error`,
    {
      allow: [],
      boolean: false,
      disallowTemplateShorthand: false,
      number: true,
      string: true,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-implicit-globals */
  'no-implicit-globals': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-import-assign */
  'no-import-assign': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-inner-declarations */
  'no-inner-declarations': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-invalid-regexp */
  'no-invalid-regexp': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-label-var */
  'no-label-var': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-lonely-if */
  'no-lonely-if': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-loss-of-precision */
  'no-loss-of-precision': `error`,

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

  /** @see https://eslint.org/docs/latest/rules/no-useless-call */
  'no-useless-call': `error`,

  /** @see https://eslint.org/docs/latest/rules/prefer-object-has-own */
  'prefer-object-has-own': `error`,

  /** @see https://eslint.org/docs/latest/rules/prefer-object-spread */
  'prefer-object-spread': `error`,

  /** @see https://eslint.org/docs/latest/rules/sort-keys */
  'sort-keys': [
    `error`,
    `asc`,
    {
      allowLineSeparatedGroups: false,
      caseSensitive: false,
      minKeys: 2,
      natural: true,
    },
  ],

  yoda: `error`,
};

/**
 * The ten Node.js/CommonJS rules in ESLint core have been deprecated and moved to a plugin.
 * @see https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules
 * @see https://github.com/eslint-community/eslint-plugin-n
 *
 * @deprecated
 */
export const deprecatedNodeCommonJsRules = {
  /** @see https://eslint.org/docs/latest/rules/global-require */
  'global-require': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-new-require */
  'no-new-require': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-path-concat */
  'no-path-concat': `error`,
};

export const disabledBasePersonalRules = {
  /** @see https://eslint.org/docs/latest/rules/no-await-in-loop */
  'no-await-in-loop': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-continue */
  'no-continue': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-inline-comments */
  'no-inline-comments': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-restricted-syntax */
  'no-restricted-syntax': `off`,
};

/**
 * These core ESLint rules must be disabled because they do not support TypeScript syntax.
 * We'll disable these rules here then enable their corresponding TypeScript extension rules below.
 * @see https://typescript-eslint.io/rules#extension-rules
 */
export const disabledTypescriptExtensionRules = {
  /** @see https://eslint.org/docs/latest/rules/class-methods-use-this */
  'class-methods-use-this': `off`,

  /** @see https://eslint.org/docs/latest/rules/consistent-return */
  'consistent-return': `off`,

  /** @see https://eslint.org/docs/latest/rules/default-param-last */
  'default-param-last': `off`,

  /** @see https://eslint.org/docs/latest/rules/dot-notation */
  'dot-notation': `off`,

  /** @see https://eslint.org/docs/latest/rules/init-declarations */
  'init-declarations': `off`,

  /** @see https://eslint.org/docs/latest/rules/max-params */
  'max-params': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-array-constructor */
  'no-array-constructor': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-dupe-class-members */
  'no-dupe-class-members': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-empty-function */
  'no-empty-function': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-implied-eval */
  'no-implied-eval': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-invalid-this */
  'no-invalid-this': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-loop-func */
  'no-loop-func': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-magic-numbers */
  'no-magic-numbers': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-redeclare */
  'no-redeclare': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-restricted-imports */
  'no-restricted-imports': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-shadow */
  'no-shadow': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-throw-literal */
  'no-throw-literal': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-unused-expressions */
  'no-unused-expressions': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-unused-vars */
  'no-unused-vars': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-use-before-define */
  'no-use-before-define': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-useless-constructor */
  'no-useless-constructor': `off`,

  /** @see https://eslint.org/docs/latest/rules/prefer-destructuring */
  'prefer-destructuring': `off`,

  /** @see https://eslint.org/docs/latest/rules/prefer-promise-reject-errors */
  'prefer-promise-reject-errors': `off`,

  /** @see https://eslint.org/docs/latest/rules/require-await */
  'require-await': `off`,
};

export const disabledTypescriptPersonalRules = {
  '@typescript-eslint/no-unsafe-assignment': `off`,
  '@typescript-eslint/no-unsafe-call': `off`,
  '@typescript-eslint/no-unsafe-member-access': `off`,
  '@typescript-eslint/prefer-nullish-coalescing': `off`,
  '@typescript-eslint/prefer-regexp-exec': `off`,
};

/** @see https://github.com/import-js/eslint-plugin-import */
export const importRules = {
  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md */
  'import/consistent-type-specifier-style': [`error`, `prefer-top-level`],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md */
  'import/default': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md */
  'import/dynamic-import-chunkname': [
    `off`,
    {
      importFunctions: [],
      webpackChunknameFormat: `[0-9a-zA-Z-_/.]+`,
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md */
  'import/export': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md */
  'import/exports-last': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md */
  'import/extensions': [`off`, `ignorePackages`],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md */
  'import/first': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md */
  'import/group-exports': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md */
  'import/max-dependencies': [
    `off`,
    {
      max: 10,
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md */
  'import/named': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md */
  'import/namespace': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md */
  'import/newline-after-import': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md */
  'import/no-absolute-path': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md */
  'import/no-amd': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md */
  'import/no-anonymous-default-export': [
    `off`,
    {
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowArray: false,
      allowArrowFunction: false,
      allowLiteral: false,
      allowObject: false,
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md */
  'import/no-commonjs': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md */
  'import/no-cycle': [
    `error`,
    {
      allowUnsafeDynamicCyclicDependency: false,
      ignoreExternal: false,
      maxDepth: `∞`,
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md */
  'import/no-default-export': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md */
  'import/no-deprecated': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md */
  'import/no-duplicates': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md */
  'import/no-dynamic-require': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md */
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

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md */
  'import/no-import-module-exports': [
    `error`,
    {
      exceptions: [],
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md */
  'import/no-internal-modules': [
    `off`,
    {
      allow: [],
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md */
  'import/no-mutable-exports': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md */
  'import/no-named-as-default': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md */
  'import/no-named-as-default-member': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md */
  'import/no-named-default': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md */
  'import/no-named-export': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md */
  'import/no-namespace': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md */
  'import/no-nodejs-modules': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md */
  'import/no-relative-packages': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md */
  'import/no-relative-parent-imports': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md */
  'import/no-restricted-paths': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md */
  'import/no-self-import': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md */
  'import/no-unassigned-import': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md */
  'import/no-unresolved': [
    `off`,
    {
      caseSensitive: true,
      caseSensitiveStrict: false,
      commonjs: true,
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md */
  'import/no-unused-modules': [
    `off`,
    {
      ignoreExports: [],
      missingExports: true,
      unusedExports: true,
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md */
  'import/no-useless-path-segments': [
    `error`,
    {
      commonjs: true,
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md */
  'import/no-webpack-loader-syntax': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md */
  'import/order': [
    `error`,
    {
      distinctGroup: true,
      groups: [[`builtin`, `external`, `internal`]],
      warnOnUnassignedImports: false,
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md */
  'import/prefer-default-export': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md */
  'import/unambiguous': `off`,
};

/** @see https://github.com/lydell/eslint-plugin-simple-import-sort */
export const simpleImportSortRules = {
  'simple-import-sort/exports': `error`,
  'simple-import-sort/imports': `error`,
};

export const stylisticRules = {
  /** @see https://eslint.style/rules/default/array-bracket-newline */
  '@stylistic/array-bracket-newline': [`off`, `consistent`],

  /** @see https://eslint.style/rules/default/array-bracket-spacing */
  '@stylistic/array-bracket-spacing': [`error`, `never`],

  /** @see https://eslint.style/rules/default/array-element-newline */
  '@stylistic/array-element-newline': [
    `off`,
    {
      minItems: 3,
      multiline: true,
    },
  ],

  /** @see https://eslint.style/rules/default/arrow-parens */
  '@stylistic/arrow-parens': [`error`, `always`],

  /** @see https://eslint.style/rules/default/arrow-spacing */
  '@stylistic/arrow-spacing': [
    `error`,
    {
      after: true,
      before: true,
    },
  ],

  /** @see https://eslint.style/rules/default/block-spacing */
  '@stylistic/block-spacing': [`error`, `always`],

  /** @see https://eslint.style/rules/default/brace-style */
  '@stylistic/brace-style': [
    `error`,
    `1tbs`,
    {
      allowSingleLine: true,
    },
  ],

  /** @see https://eslint.style/rules/default/comma-dangle */
  '@stylistic/comma-dangle': [
    `error`,
    {
      arrays: `always-multiline`,
      exports: `always-multiline`,
      functions: `always-multiline`,
      imports: `always-multiline`,
      objects: `always-multiline`,
    },
  ],

  /** @see https://eslint.style/rules/default/comma-spacing */
  '@stylistic/comma-spacing': [
    `error`,
    {
      after: true,
      before: false,
    },
  ],

  /** @see https://eslint.style/rules/default/comma-style */
  '@stylistic/comma-style': [
    `error`,
    `last`,
    {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        NewExpression: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
      },
    },
  ],

  /** @see https://eslint.style/rules/default/computed-property-spacing */
  '@stylistic/computed-property-spacing': [`error`, `never`],

  /** @see https://eslint.style/rules/default/dot-location */
  '@stylistic/dot-location': [`error`, `property`],

  /** @see https://eslint.style/rules/default/eol-last */
  '@stylistic/eol-last': [`error`, `always`],

  /** @see https://eslint.style/rules/default/func-call-spacing */
  '@stylistic/func-call-spacing': [`error`, `never`],

  /** @see https://eslint.style/rules/default/function-call-argument-newline */
  '@stylistic/function-call-argument-newline': [`error`, `consistent`],

  /** @see https://eslint.style/rules/default/function-call-spacing */
  '@stylistic/function-call-spacing': [`error`, `never`],

  /** @see https://eslint.style/rules/default/function-paren-newline */
  '@stylistic/function-paren-newline': [`off`, `multiline-arguments`],

  /** @see https://eslint.style/rules/default/generator-star-spacing */
  '@stylistic/generator-star-spacing': [
    `error`,
    {
      after: true,
      before: false,
    },
  ],

  /** @see https://eslint.style/rules/default/implicit-arrow-linebreak */
  '@stylistic/implicit-arrow-linebreak': [`off`, `beside`],

  /** @see https://eslint.style/rules/default/jsx-quotes */
  '@stylistic/jsx-quotes': [`error`, `prefer-double`],

  /** @see https://eslint.style/rules/default/key-spacing */
  '@stylistic/key-spacing': [
    `error`,
    {
      afterColon: true,
      beforeColon: false,
    },
  ],

  /** @see https://eslint.style/rules/default/keyword-spacing */
  '@stylistic/keyword-spacing': [
    `error`,
    {
      after: true,
      before: true,
      overrides: {
        case: {
          after: true,
        },
        return: {
          after: true,
        },
        throw: {
          after: true,
        },
      },
    },
  ],

  /** @see https://eslint.style/rules/default/linebreak-style */
  '@stylistic/linebreak-style': [`error`, `unix`],

  /** @see https://eslint.style/rules/default/lines-around-comment */
  '@stylistic/lines-around-comment': [
    `warn`,
    {
      /** `true` requires an empty line after block comments. */
      afterBlockComment: false,

      /** `true` requires an empty line after hashbang comments. */
      afterHashbangComment: true,

      /** `true` requires an empty line after line comments. */
      afterLineComment: false,

      /** `true` allows comments to appear at the end of array literals. */
      allowArrayEnd: true,

      /** `true` allows comments to appear at the start of array literals. */
      allowArrayStart: true,

      /**
       * `true` allows comments to appear at the end of block statements,
       * function bodies, classes, switch statements, and class static blocks.
       */
      allowBlockEnd: false,

      /**
       * `true` allows comments to appear at the start of block statements,
       * function bodies, classes, switch statements, and class static blocks.
       */
      allowBlockStart: true,

      /** `true` allows comments to appear at the end of classes. */
      allowClassEnd: false,

      /** `true` allows comments to appear at the start of classes. */
      allowClassStart: true,

      /** `true` allows comments to appear at the end of object literals. */
      allowObjectEnd: true,

      /** `true` allows comments to appear at the start of object literals. */
      allowObjectStart: true,

      applyDefaultIgnorePatterns: true,

      /** `true` (default) requires an empty line before block comments. */
      beforeBlockComment: true,

      /** `true` requires an empty line before line comments. */
      beforeLineComment: true,
    },
  ],

  /** @see https://eslint.style/rules/default/lines-between-class-members */
  '@stylistic/lines-between-class-members': [
    `error`,
    `always`,
    {
      exceptAfterSingleLine: false,
    },
  ],

  /** @see https://eslint.style/rules/default/max-len */
  '@stylistic/max-len': [
    `error`,
    100,
    2,
    {
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    },
  ],

  /** @see https://eslint.style/rules/default/max-statements-per-line */
  '@stylistic/max-statements-per-line': [
    `error`,
    {
      max: 1,
    },
  ],

  /** @see https://eslint.style/rules/default/new-parens */
  '@stylistic/new-parens': [`error`],

  /** @see https://eslint.style/rules/default/no-extra-semi */
  '@stylistic/no-extra-semi': [`error`],

  /** @see https://eslint.style/rules/default/no-floating-decimal */
  '@stylistic/no-floating-decimal': [`error`],

  /** @see https://eslint.style/rules/default/no-mixed-operators */
  '@stylistic/no-mixed-operators': [
    `error`,
    {
      allowSamePrecedence: false,
      groups: [
        [`%`, `**`],
        [`%`, `+`],
        [`%`, `-`],
        [`%`, `*`],
        [`%`, `/`],
        [`/`, `*`],
        [`&`, `|`, `<<`, `>>`, `>>>`],
        [`==`, `!=`, `===`, `!==`],
        [`&&`, `||`],
      ],
    },
  ],

  /** @see https://eslint.style/rules/default/no-mixed-spaces-and-tabs */
  '@stylistic/no-mixed-spaces-and-tabs': [`error`],

  /** @see https://eslint.style/rules/default/no-multi-spaces */
  '@stylistic/no-multi-spaces': [
    `error`,
    {
      ignoreEOLComments: false,
    },
  ],

  /** @see https://eslint.style/rules/default/no-multiple-empty-lines */
  '@stylistic/no-multiple-empty-lines': [
    `error`,
    {
      max: 1,
      maxBOF: 0,
      maxEOF: 0,
    },
  ],

  /** @see https://eslint.style/rules/default/no-tabs */
  '@stylistic/no-tabs': [`error`],

  /** @see https://eslint.style/rules/default/no-trailing-spaces */
  '@stylistic/no-trailing-spaces': [
    `error`,
    {
      ignoreComments: false,
      skipBlankLines: false,
    },
  ],

  /** @see https://eslint.style/rules/default/no-whitespace-before-property */
  '@stylistic/no-whitespace-before-property': [`error`],

  /** @see https://eslint.style/rules/default/nonblock-statement-body-position */
  '@stylistic/nonblock-statement-body-position': [
    `error`,
    `beside`,
    {
      overrides: {},
    },
  ],

  /** @see https://eslint.style/rules/default/object-curly-spacing */
  '@stylistic/object-curly-spacing': [`error`, `always`],

  /** @see https://eslint.style/rules/default/one-var-declaration-per-line */
  '@stylistic/one-var-declaration-per-line': [`error`, `always`],

  /** @see https://eslint.style/rules/default/padded-blocks */
  '@stylistic/padded-blocks': [
    `error`,
    {
      blocks: `never`,
      classes: `never`,
      switches: `never`,
    },
    {
      allowSingleLineBlocks: true,
    },
  ],

  /** @see https://eslint.style/rules/default/padding-line-between-statements */
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

  /** @see https://eslint.style/rules/default/quote-props */
  '@stylistic/quote-props': [
    `error`,
    `as-needed`,
    {
      keywords: false,
      numbers: false,
      unnecessary: true,
    },
  ],

  /** @see https://eslint.style/rules/default/quotes */
  '@stylistic/quotes': [`error`, `backtick`],

  /** @see https://eslint.style/rules/default/rest-spread-spacing */
  '@stylistic/rest-spread-spacing': [`error`, `never`],

  /** @see https://eslint.style/rules/default/semi */
  '@stylistic/semi': [`error`, `always`],

  /** @see https://eslint.style/rules/default/semi-spacing */
  '@stylistic/semi-spacing': [
    `error`,
    {
      after: true,
      before: false,
    },
  ],

  /** @see https://eslint.style/rules/default/semi-style */
  '@stylistic/semi-style': [`error`, `last`],

  /** @see https://eslint.style/rules/default/space-before-blocks */
  '@stylistic/space-before-blocks': `error`,

  /** @see https://eslint.style/rules/default/space-before-function-paren */
  '@stylistic/space-before-function-paren': [
    `error`,
    {
      anonymous: `always`,
      asyncArrow: `always`,
      named: `never`,
    },
  ],

  /** @see https://eslint.style/rules/default/space-in-parens */
  '@stylistic/space-in-parens': [`error`, `never`],

  /** @see https://eslint.style/rules/default/space-infix-ops */
  '@stylistic/space-infix-ops': `error`,

  /** @see https://eslint.style/rules/default/space-unary-ops */
  '@stylistic/space-unary-ops': [
    `error`,
    {
      nonwords: false,
      overrides: {},
      words: true,
    },
  ],

  /** @see https://eslint.style/rules/default/spaced-comment */
  '@stylistic/spaced-comment': [
    `error`,
    `always`,
    {
      block: {
        balanced: true,
        exceptions: [`-`, `+`],
        markers: [`=`, `!`, `:`, `::`],
      },
      line: {
        exceptions: [`-`, `+`],
        markers: [`=`, `!`, `/`],
      },
    },
  ],

  /** @see https://eslint.style/rules/default/switch-colon-spacing */
  '@stylistic/switch-colon-spacing': [
    `error`,
    {
      after: true,
      before: false,
    },
  ],

  /** @see https://eslint.style/rules/default/template-curly-spacing */
  '@stylistic/template-curly-spacing': `error`,

  /** @see https://eslint.style/rules/default/template-tag-spacing */
  '@stylistic/template-tag-spacing': [`error`, `never`],

  /** @see https://eslint.style/rules/default/yield-star-spacing */
  '@stylistic/yield-star-spacing': [`error`, `after`],
};

export const typescriptRules = {
  /** @see https://typescript-eslint.io/rules/array-type/ */
  '@typescript-eslint/array-type': `error`,

  /** @see https://typescript-eslint.io/rules/ban-ts-comment/ */
  '@typescript-eslint/ban-ts-comment': `warn`,

  /**
   * @see https://typescript-eslint.io/rules/class-methods-use-this/
   *
   * This rule extends the base `class-methods-use-this` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/class-methods-use-this
   */
  '@typescript-eslint/class-methods-use-this': [
    `error`,
    {
      enforceForClassFields: true,
      exceptMethods: [],
    },
  ],

  /**
   * @see https://typescript-eslint.io/rules/consistent-return/
   *
   * This rule extends the base `consistent-return` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/consistent-return
   */
  '@typescript-eslint/consistent-return': `error`,

  /** @see https://typescript-eslint.io/rules/consistent-type-definitions/ */
  '@typescript-eslint/consistent-type-definitions': `off`,

  /** @see https://typescript-eslint.io/rules/consistent-type-imports/ */
  '@typescript-eslint/consistent-type-imports': [
    `error`,
    { fixStyle: `separate-type-imports`, prefer: `type-imports` },
  ],

  /**
   * @see https://typescript-eslint.io/rules/default-param-last/
   *
   * This rule extends the base `default-param-last` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/default-param-last
   */
  '@typescript-eslint/default-param-last': `error`,

  /**
   * @see https://typescript-eslint.io/rules/dot-notation/
   *
   * This rule extends the base `dot-notation` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/dot-notation
   */
  '@typescript-eslint/dot-notation': [
    `error`,
    {
      allowKeywords: true,
      allowPattern: ``,
    },
  ],

  /**
   * @see https://typescript-eslint.io/rules/init-declarations/
   *
   * This rule extends the base `init-declarations` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/init-declarations
   */
  '@typescript-eslint/init-declarations': [`error`, `always`],

  /**
   * @see https://typescript-eslint.io/rules/max-params/
   *
   * This rule extends the base `max-params` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/max-params
   */
  '@typescript-eslint/max-params': [
    `warn`,
    {
      max: 4,
    },
  ],

  /** @see https://typescript-eslint.io/rules/member-ordering/ */
  '@typescript-eslint/member-ordering': [
    `error`,
    {
      default: {
        memberTypes: [`signature`, `field`, `constructor`, `method`],
        order: `alphabetically-case-insensitive`,
      },
    },
  ],

  /**
   * @see https://typescript-eslint.io/rules/no-array-constructor/
   *
   * This rule extends the base `no-array-constructor` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/no-array-constructor
   */
  '@typescript-eslint/no-array-constructor': `error`,

  /**
   * @see https://typescript-eslint.io/rules/no-dupe-class-members/
   *
   * This rule extends the base `no-dupe-class-members` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/no-dupe-class-members
   */
  '@typescript-eslint/no-dupe-class-members': `error`,

  /** @see https://typescript-eslint.io/rules/no-duplicate-enum-values/ */
  '@typescript-eslint/no-duplicate-enum-values': `error`,

  /**
   * @see https://typescript-eslint.io/rules/no-empty-function/
   *
   * This rule extends the base `no-empty-function` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/no-empty-function
   */
  '@typescript-eslint/no-empty-function': `error`,

  /** @see https://typescript-eslint.io/rules/no-empty-object-type/ */
  '@typescript-eslint/no-empty-object-type': `warn`,

  /** @see https://typescript-eslint.io/rules/no-explicit-any/ */
  '@typescript-eslint/no-explicit-any': `off`,

  /** @see https://typescript-eslint.io/rules/no-extra-non-null-assertion/ */
  '@typescript-eslint/no-extra-non-null-assertion': `error`,

  /**
   * @see https://typescript-eslint.io/rules/no-implied-eval/
   *
   * This rule extends the base `no-implied-eval` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/no-implied-eval
   */
  '@typescript-eslint/no-implied-eval': `error`,

  /**
   * @see https://typescript-eslint.io/rules/no-invalid-this/
   *
   * This rule extends the base `no-invalid-this` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/no-invalid-this
   */
  '@typescript-eslint/no-invalid-this': `error`,

  /**
   * @see https://typescript-eslint.io/rules/no-loop-func/
   *
   * This rule extends the base `no-loop-func` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/no-loop-func
   */
  '@typescript-eslint/no-loop-func': `error`,

  /** @see https://typescript-eslint.io/rules/no-misused-new/ */
  '@typescript-eslint/no-misused-new': `error`,

  /** @see https://typescript-eslint.io/rules/no-misused-promises/ */
  '@typescript-eslint/no-misused-promises': [
    `error`,
    {
      checksVoidReturn: {
        arguments: true,
        attributes: false,
      },
    },
  ],

  /** @see https://typescript-eslint.io/rules/no-namespace/ */
  '@typescript-eslint/no-namespace': `error`,

  /** @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain/ */
  '@typescript-eslint/no-non-null-asserted-optional-chain': `error`,

  /**
   * @see https://typescript-eslint.io/rules/no-redeclare/
   *
   * This rule extends the base `no-redeclare` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/no-redeclare
   */
  '@typescript-eslint/no-redeclare': `error`,

  /**
   * @see https://typescript-eslint.io/rules/no-restricted-imports/
   *
   * This rule extends the base `no-restricted-imports` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/no-restricted-imports
   */
  '@typescript-eslint/no-restricted-imports': [
    `error`,
    {
      message: `Please use 'node:assert' instead.`,
      name: `assert`,
    },
    {
      message: `Please use 'node:child_process' instead.`,
      name: `child_process`,
    },
    {
      message: `Please use 'node:crypto' instead.`,
      name: `crypto`,
    },
    {
      message: `Please use 'node:fs' instead.`,
      name: `fs`,
    },
    {
      message: `Please use 'node:https' instead.`,
      name: `https`,
    },
    {
      message: `Please use 'node:os' instead.`,
      name: `os`,
    },
    {
      message: `Please use 'node:path' instead.`,
      name: `path`,
    },
    {
      message: `Please use 'node:process' instead.`,
      name: `process`,
    },
    {
      message: `Please use 'node:stream' instead.`,
      name: `stream`,
    },
    {
      message: `Please use 'node:url' instead.`,
      name: `url`,
    },
    {
      message: `Please use 'node:util' instead.`,
      name: `util`,
    },
    {
      message: `Please use 'node:zlib' instead.`,
      name: `zlib`,
    },
  ],

  /**
   * @see https://typescript-eslint.io/rules/no-shadow/
   *
   * This rule extends the base `no-shadow` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/no-shadow
   */
  '@typescript-eslint/no-shadow': `error`,

  /** @see https://typescript-eslint.io/rules/no-this-alias/ */
  '@typescript-eslint/no-this-alias': `error`,

  /** @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint/ */
  '@typescript-eslint/no-unnecessary-type-constraint': `error`,

  /** @see https://typescript-eslint.io/rules/no-unsafe-declaration-merging/ */
  '@typescript-eslint/no-unsafe-declaration-merging': `error`,

  /**
   * @see https://typescript-eslint.io/rules/no-unused-expressions/
   *
   * This rule extends the base `no-unused-expressions` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/no-unused-expressions
   */
  '@typescript-eslint/no-unused-expressions': `error`,

  /**
   * @see https://typescript-eslint.io/rules/no-unused-vars/
   *
   * This rule extends the base `no-unused-vars` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/no-unused-vars
   */
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

  /**
   * @see https://typescript-eslint.io/rules/no-use-before-define/
   *
   * This rule extends the base `no-use-before-define` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/no-use-before-define
   */
  '@typescript-eslint/no-use-before-define': [
    `error`,
    {
      functions: false,
    },
  ],

  /**
   * @see https://typescript-eslint.io/rules/no-useless-constructor/
   *
   * This rule extends the base `no-useless-constructor` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/no-useless-constructor
   */
  '@typescript-eslint/no-useless-constructor': `error`,

  /**
   * @see https://typescript-eslint.io/rules/only-throw-error/
   *
   * This rule extends the base `no-throw-literal` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/no-throw-literal
   */
  '@typescript-eslint/only-throw-error': `error`,

  /** @see https://typescript-eslint.io/rules/prefer-as-const/ */
  '@typescript-eslint/prefer-as-const': `error`,

  /**
   * @see https://typescript-eslint.io/rules/prefer-destructuring/
   *
   * This rule extends the base `prefer-destructuring` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/prefer-destructuring
   */
  '@typescript-eslint/prefer-destructuring': [
    `error`,
    {
      array: false,
      object: true,
    },
    {
      enforceForRenamedProperties: false,
    },
  ],

  /** @see https://typescript-eslint.io/rules/prefer-for-of/ */
  '@typescript-eslint/prefer-for-of': `error`,

  /** @see https://typescript-eslint.io/rules/prefer-literal-enum-member/ */
  '@typescript-eslint/prefer-literal-enum-member': `error`,

  /**
   * @see https://typescript-eslint.io/rules/prefer-promise-reject-errors/
   *
   * This rule extends the base `prefer-promise-reject-errors` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
   */
  '@typescript-eslint/prefer-promise-reject-errors': `error`,

  /**
   * @see https://typescript-eslint.io/rules/require-await/
   *
   * This rule extends the base `require-await` rule from ESLint core.
   * @see https://eslint.org/docs/latest/rules/require-await
   */
  '@typescript-eslint/require-await': `error`,

  /**
   * @see https://typescript-eslint.io/rules/restrict-template-expressions/
   */
  '@typescript-eslint/restrict-template-expressions': [
    `error`,
    {
      /** Whether to allow `any` typed values in template expressions. */
      allowAny: false,

      /** Whether to allow `array` typed values in template expressions. */
      allowArray: false,

      /** Whether to allow `boolean` typed values in template expressions. */
      allowBoolean: false,

      /** Whether to allow `never` typed values in template expressions. */
      allowNever: false,

      /** Whether to allow `nullish` typed values in template expressions. */
      allowNullish: false,

      /** Whether to allow `number` typed values in template expressions. */
      allowNumber: true,

      /** Whether to allow `regexp` typed values in template expressions. */
      allowRegExp: false,
    },
  ],

  /** @see https://typescript-eslint.io/rules/triple-slash-reference/ */
  '@typescript-eslint/triple-slash-reference': `error`,
};

// eslint-disable-next-line import/no-default-export
export default {
  rules: {
    baseRules,
    deprecatedNodeCommonJsRules,
    disabledBasePersonalRules,
    disabledTypescriptExtensionRules,
    disabledTypescriptPersonalRules,
    importRules,
    simpleImportSortRules,
    stylisticRules,
    typescriptRules,
  },
};
