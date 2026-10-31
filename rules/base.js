/** @import { Linter } from 'eslint' */

/**
 * Core ESLint rules.
 * @see https://eslint.org/docs/latest/rules/
 *
 * @satisfies {Linter.RulesRecord}
 */
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

  /** @see https://eslint.org/docs/latest/rules/complexity */
  complexity: [`warn`, { max: 20 }],

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
  'no-constant-condition': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-constructor-return */
  'no-constructor-return': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-control-regex */
  'no-control-regex': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-debugger */
  'no-debugger': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-delete-var */
  'no-delete-var': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-div-regex */
  'no-div-regex': `error`,

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

  /** @see https://eslint.org/docs/latest/rules/no-irregular-whitespace */
  'no-irregular-whitespace': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-iterator */
  'no-iterator': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-label-var */
  'no-label-var': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-labels */
  'no-labels': [
    `error`,
    {
      allowLoop: false,
      allowSwitch: false,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-lone-blocks */
  'no-lone-blocks': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-lonely-if */
  'no-lonely-if': `error`,

  /**
   * @see https://eslint.org/docs/latest/rules/no-loop-func
   *
   * The core rule supports TypeScript syntax. It replaces the deprecated
   * `@typescript-eslint/no-loop-func` extension rule.
   * @see https://typescript-eslint.io/rules/no-loop-func/
   */
  'no-loop-func': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-loss-of-precision */
  'no-loss-of-precision': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-misleading-character-class */
  'no-misleading-character-class': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-multi-assign */
  'no-multi-assign': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-multi-str */
  'no-multi-str': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-negated-condition */
  'no-negated-condition': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-nested-ternary */
  'no-nested-ternary': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-new */
  'no-new': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-new-func */
  'no-new-func': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-new-native-nonconstructor */
  'no-new-native-nonconstructor': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-new-wrappers */
  'no-new-wrappers': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape */
  'no-nonoctal-decimal-escape': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-obj-calls */
  'no-obj-calls': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-object-constructor */
  'no-object-constructor': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-octal */
  'no-octal': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-octal-escape */
  'no-octal-escape': `error`,

  /**
   * @see https://eslint.org/docs/latest/rules/no-param-reassign
   */
  'no-param-reassign': [
    `error`,
    {
      /**
       * This configuration is from the Airbnb ESLint config.
       * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
       */
      ignorePropertyModificationsFor: [
        `acc`, // for reduce accumulators
        `accumulator`, // for reduce accumulators
        `e`, // for e.returnvalue
        `ctx`, // for Koa routing
        `context`, // for Koa routing
        `req`, // for Express requests
        `request`, // for Express requests
        `res`, // for Express responses
        `response`, // for Express responses
        `$scope`, // for Angular 1 scopes
        `staticContext`, // for ReactRouter context
      ],
      props: true,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-plusplus */
  'no-plusplus': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-promise-executor-return */
  'no-promise-executor-return': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-proto */
  'no-proto': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-prototype-builtins */
  'no-prototype-builtins': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-regex-spaces */
  'no-regex-spaces': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-restricted-exports */
  'no-restricted-exports': [
    `error`,
    {
      restrictedNamedExports: [`default`, `then`],
    },
  ],

  /**
   * @see https://eslint.org/docs/latest/rules/no-restricted-globals
   *
   * This configuration is from the Airbnb ESLint config.
   * @see https://www.npmjs.com/package/eslint-config-airbnb-base
   *
   * It uses the `confusing-browser-globals` from Facebook's `create-react-app`,
   * a curated list of browser globals that commonly cause confusion and
   * are not recommended to use without an explicit `window.` qualifier.
   * @see https://www.npmjs.com/package/confusing-browser-globals
   */
  'no-restricted-globals': [
    `error`,
    {
      message: `Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite`,
      name: `isFinite`,
    },
    {
      message: `Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan`,
      name: `isNaN`,
    },
    `addEventListener`,
    `blur`,
    `close`,
    `closed`,
    `confirm`,
    `defaultStatus`,
    `defaultstatus`,
    `event`,
    `external`,
    `find`,
    `focus`,
    `frameElement`,
    `frames`,
    `history`,
    `innerHeight`,
    `innerWidth`,
    `length`,
    `location`,
    `locationbar`,
    `menubar`,
    `moveBy`,
    `moveTo`,
    `name`,
    `onblur`,
    `onerror`,
    `onfocus`,
    `onload`,
    `onresize`,
    `onunload`,
    `open`,
    `opener`,
    `opera`,
    `outerHeight`,
    `outerWidth`,
    `pageXOffset`,
    `pageYOffset`,
    `parent`,
    `print`,
    `removeEventListener`,
    `resizeBy`,
    `resizeTo`,
    `screen`,
    `screenLeft`,
    `screenTop`,
    `screenX`,
    `screenY`,
    `scroll`,
    `scrollbars`,
    `scrollBy`,
    `scrollTo`,
    `scrollX`,
    `scrollY`,
    `self`,
    `status`,
    `statusbar`,
    `stop`,
    `toolbar`,
    `top`,
  ],

  /**
   * @see https://eslint.org/docs/latest/rules/no-restricted-properties
   *
   * This configuration is from the Airbnb ESLint config.
   * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
   */
  'no-restricted-properties': [
    `error`,
    {
      message: `arguments.callee is deprecated`,
      object: `arguments`,
      property: `callee`,
    },
    {
      message: `Please use Number.isFinite instead`,
      object: `global`,
      property: `isFinite`,
    },
    {
      message: `Please use Number.isFinite instead`,
      object: `self`,
      property: `isFinite`,
    },
    {
      message: `Please use Number.isFinite instead`,
      object: `window`,
      property: `isFinite`,
    },
    {
      message: `Please use Number.isNaN instead`,
      object: `global`,
      property: `isNaN`,
    },
    {
      message: `Please use Number.isNaN instead`,
      object: `self`,
      property: `isNaN`,
    },
    {
      message: `Please use Number.isNaN instead`,
      object: `window`,
      property: `isNaN`,
    },
    {
      message: `Please use Object.defineProperty instead.`,
      property: `__defineGetter__`,
    },
    {
      message: `Please use Object.defineProperty instead.`,
      property: `__defineSetter__`,
    },
    {
      message: `Use the exponentiation operator (**) instead.`,
      object: `Math`,
      property: `pow`,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-return-assign */
  'no-return-assign': [`error`, `always`],

  /** @see https://eslint.org/docs/latest/rules/no-script-url */
  'no-script-url': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-self-assign */
  'no-self-assign': [
    `error`,
    {
      props: true,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-self-compare */
  'no-self-compare': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-sequences */
  'no-sequences': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-setter-return */
  'no-setter-return': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-shadow-restricted-names */
  'no-shadow-restricted-names': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-sparse-arrays */
  'no-sparse-arrays': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-template-curly-in-string */
  'no-template-curly-in-string': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-this-before-super */
  'no-this-before-super': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-undef */
  'no-undef': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-undef-init */
  'no-undef-init': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-undefined */
  'no-undefined': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-unexpected-multiline */
  'no-unexpected-multiline': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-unmodified-loop-condition */
  'no-unmodified-loop-condition': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-unneeded-ternary */
  'no-unneeded-ternary': [
    `error`,
    {
      defaultAssignment: false,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-unreachable */
  'no-unreachable': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-unreachable-loop */
  'no-unreachable-loop': [
    `error`,
    {
      ignore: [],
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-unsafe-finally */
  'no-unsafe-finally': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-unsafe-negation */
  'no-unsafe-negation': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining */
  'no-unsafe-optional-chaining': [
    `error`,
    {
      disallowArithmeticOperators: true,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-unused-labels */
  'no-unused-labels': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-unused-private-class-members */
  'no-unused-private-class-members': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-useless-backreference */
  'no-useless-backreference': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-useless-call */
  'no-useless-call': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-useless-catch */
  'no-useless-catch': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-useless-computed-key */
  'no-useless-computed-key': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-useless-concat */
  'no-useless-concat': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-useless-escape */
  'no-useless-escape': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-useless-rename */
  'no-useless-rename': [
    `error`,
    {
      ignoreDestructuring: false,
      ignoreExport: false,
      ignoreImport: false,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/no-useless-return */
  'no-useless-return': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-var */
  'no-var': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-void */
  'no-void': `error`,

  /** @see https://eslint.org/docs/latest/rules/no-with */
  'no-with': `error`,

  /** @see https://eslint.org/docs/latest/rules/object-shorthand */
  'object-shorthand': [
    `error`,
    `always`,
    {
      avoidQuotes: true,
      ignoreConstructors: false,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/one-var */
  'one-var': [`error`, `never`],

  /** @see https://eslint.org/docs/latest/rules/operator-assignment */
  'operator-assignment': [`error`, `always`],

  /** @see https://eslint.org/docs/latest/rules/prefer-arrow-callback */
  'prefer-arrow-callback': [
    `error`,
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/prefer-const */
  'prefer-const': [
    `error`,
    {
      destructuring: `any`,
      ignoreReadBeforeAssign: true,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/prefer-exponentiation-operator */
  'prefer-exponentiation-operator': `error`,

  /** @see https://eslint.org/docs/latest/rules/prefer-numeric-literals */
  'prefer-numeric-literals': `error`,

  /** @see https://eslint.org/docs/latest/rules/prefer-object-has-own */
  'prefer-object-has-own': `error`,

  /** @see https://eslint.org/docs/latest/rules/prefer-object-spread */
  'prefer-object-spread': `error`,

  /** @see https://eslint.org/docs/latest/rules/prefer-regex-literals */
  'prefer-regex-literals': [
    `error`,
    {
      disallowRedundantWrapping: true,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/prefer-rest-params */
  'prefer-rest-params': `error`,

  /** @see https://eslint.org/docs/latest/rules/prefer-spread */
  'prefer-spread': `error`,

  /** @see https://eslint.org/docs/latest/rules/prefer-template */
  'prefer-template': `error`,

  /** @see https://eslint.org/docs/latest/rules/radix */
  radix: `error`,

  /** @see https://eslint.org/docs/latest/rules/require-atomic-updates */
  'require-atomic-updates': `error`,

  /** @see https://eslint.org/docs/latest/rules/require-yield */
  'require-yield': `error`,

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

  /** @see https://eslint.org/docs/latest/rules/strict */
  strict: [`error`, `never`],

  /** @see https://eslint.org/docs/latest/rules/symbol-description */
  'symbol-description': `error`,

  /** @see https://eslint.org/docs/latest/rules/unicode-bom */
  'unicode-bom': [`error`, `never`],

  /** @see https://eslint.org/docs/latest/rules/use-isnan */
  'use-isnan': `error`,

  /** @see https://eslint.org/docs/latest/rules/valid-typeof */
  'valid-typeof': [
    `error`,
    {
      requireStringLiterals: true,
    },
  ],

  /** @see https://eslint.org/docs/latest/rules/vars-on-top */
  'vars-on-top': `error`,

  /** @see https://eslint.org/docs/latest/rules/yoda */
  yoda: `error`,
};
