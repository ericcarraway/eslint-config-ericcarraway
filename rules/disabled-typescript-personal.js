/** @import { Linter } from 'eslint' */

/**
 * typescript-eslint rules that are disabled as a matter of personal preference.
 *
 * Several of these are enabled by typescript-eslint's shared configs
 * (e.g. `strictTypeChecked`), so spread this after those configs.
 * @see https://typescript-eslint.io/users/configs
 *
 * @satisfies {Linter.RulesRecord}
 */
export const disabledTypescriptPersonalRules = {
  /** @see https://typescript-eslint.io/rules/no-unnecessary-type-arguments/ */
  '@typescript-eslint/no-unnecessary-type-arguments': `off`,

  /** @see https://typescript-eslint.io/rules/no-unsafe-assignment/ */
  '@typescript-eslint/no-unsafe-assignment': `off`,

  /** @see https://typescript-eslint.io/rules/no-unsafe-call/ */
  '@typescript-eslint/no-unsafe-call': `off`,

  /** @see https://typescript-eslint.io/rules/no-unsafe-member-access/ */
  '@typescript-eslint/no-unsafe-member-access': `off`,

  /** @see https://typescript-eslint.io/rules/prefer-nullish-coalescing/ */
  '@typescript-eslint/prefer-nullish-coalescing': `off`,

  /** @see https://typescript-eslint.io/rules/prefer-regexp-exec/ */
  '@typescript-eslint/prefer-regexp-exec': `off`,
};
