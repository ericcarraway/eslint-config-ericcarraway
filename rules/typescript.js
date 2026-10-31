/** @import { Linter } from 'eslint' */

/**
 * typescript-eslint rules, including the "extension" rules that replace
 * the core rules disabled in `disabledTypescriptExtensionRules`.
 * @see https://typescript-eslint.io/rules/
 *
 * @satisfies {Linter.RulesRecord}
 */
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
  '@typescript-eslint/no-unused-expressions': [
    `error`,
    {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
      enforceForJSX: false,
    },
  ],

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
