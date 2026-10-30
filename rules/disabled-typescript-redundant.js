/** @import { Linter } from 'eslint' */

/**
 * Rules that the TypeScript compiler already enforces.
 * In TypeScript files, these rules are redundant, slow, or prone to false positives.
 *
 * Spread this in a config block scoped to TypeScript files,
 * e.g. `files: ['**\/*.{ts,tsx,mts,cts}']`, after `baseRules` & `importRules`.
 * JavaScript files that TypeScript does not check still benefit from these rules.
 *
 * @see https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
 * @see https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
 *
 * @satisfies {Linter.RulesRecord}
 */
export const disabledTypescriptRedundantRules = {
  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md */
  'import/default': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md */
  'import/named': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md */
  'import/namespace': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md */
  'import/no-named-as-default-member': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md */
  'import/no-unresolved': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-undef */
  'no-undef': `off`,
};
