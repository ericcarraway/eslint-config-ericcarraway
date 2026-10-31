/** @import { Linter } from 'eslint' */

/**
 * Formatting rules from ESLint Stylistic, which replace the formatting rules
 * that were deprecated in ESLint core and typescript-eslint.
 * @see https://eslint.style/
 *
 * @satisfies {Linter.RulesRecord}
 */
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
  '@stylistic/comma-dangle': [`error`, `always-multiline`],

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

  /** @see https://eslint.style/rules/default/multiline-ternary */
  '@stylistic/multiline-ternary': `off`,

  /** @see https://eslint.style/rules/default/new-parens */
  '@stylistic/new-parens': `error`,

  /** @see https://eslint.style/rules/default/no-confusing-arrow */
  '@stylistic/no-confusing-arrow': [
    `error`,
    {
      allowParens: true,
    },
  ],

  /** @see https://eslint.style/rules/default/no-extra-semi */
  '@stylistic/no-extra-semi': `error`,

  /** @see https://eslint.style/rules/default/no-floating-decimal */
  '@stylistic/no-floating-decimal': `error`,

  /** @see https://eslint.style/rules/default/no-mixed-operators */
  '@stylistic/no-mixed-operators': [
    `error`,
    {
      allowSamePrecedence: false,
      /**
       * The list of arithmetic groups disallows mixing `%` and `**`
       * with other arithmetic operators.
       *
       * This configuration is from the Airbnb ESLint config.
       * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
       */
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
  '@stylistic/no-mixed-spaces-and-tabs': `error`,

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
  '@stylistic/no-tabs': `error`,

  /** @see https://eslint.style/rules/default/no-trailing-spaces */
  '@stylistic/no-trailing-spaces': [
    `error`,
    {
      ignoreComments: false,
      skipBlankLines: false,
    },
  ],

  /** @see https://eslint.style/rules/default/no-whitespace-before-property */
  '@stylistic/no-whitespace-before-property': `error`,

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

  /** @see https://eslint.style/rules/default/object-property-newline */
  '@stylistic/object-property-newline': [
    `error`,
    {
      allowAllPropertiesOnSameLine: true,
    },
  ],

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
