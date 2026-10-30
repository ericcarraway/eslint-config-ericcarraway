/** @import { Linter } from 'eslint' */

/**
 * Core ESLint rules that are replaced by typescript-eslint "extension" rules.
 * Each core rule is disabled here.
 * Where wanted, its extension rule is enabled in `typescriptRules`.
 * @see https://typescript-eslint.io/rules#extension-rules
 * @see https://typescript-eslint.io/rules/?=extension#rules Search for all rules labelled "extension".
 *
 * @satisfies {Linter.RulesRecord}
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

  /** @see https://eslint.org/docs/latest/rules/no-magic-numbers */
  'no-magic-numbers': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-redeclare */
  'no-redeclare': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-shadow */
  'no-shadow': `off`,

  /**
   * @see https://eslint.org/docs/latest/rules/no-throw-literal
   *
   * The TypeScript version of this rule is 'only-throw-error'.
   * @see https://typescript-eslint.io/rules/only-throw-error/
   */
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
