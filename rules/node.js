/** @import { Linter } from 'eslint' */

/**
 * Node.js rules from `eslint-plugin-n`.
 *
 * These replace the Node.js/CommonJS rules that were deprecated in ESLint core:
 * - `global-require` -> `n/global-require`
 * - `no-buffer-constructor` -> `n/no-deprecated-api`
 * - `no-new-require` -> `n/no-new-require`
 * - `no-path-concat` -> `n/no-path-concat`
 *
 * @see https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules
 * @see https://github.com/eslint-community/eslint-plugin-n
 *
 * @satisfies {Linter.RulesRecord}
 */
export const nodeRules = {
  /** @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md */
  'n/global-require': `error`,

  /**
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-deprecated-api.md
   *
   * Includes `new Buffer()`, formerly reported by the core `no-buffer-constructor` rule.
   */
  'n/no-deprecated-api': `error`,

  /** @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md */
  'n/no-new-require': `error`,

  /** @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md */
  'n/no-path-concat': `error`,
};
