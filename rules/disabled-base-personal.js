/** @import { Linter } from 'eslint' */

/**
 * Core ESLint rules that are disabled as a matter of personal preference
 * or because they are project-specific.
 *
 * Spread this after `baseRules`.
 *
 * @satisfies {Linter.RulesRecord}
 */
export const disabledBasePersonalRules = {
  /** @see https://eslint.org/docs/latest/rules/no-await-in-loop */
  'no-await-in-loop': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-continue */
  'no-continue': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-inline-comments */
  'no-inline-comments': `off`,

  /**
   * @see https://eslint.org/docs/latest/rules/no-restricted-imports
   *
   * Restricted imports are project-specific; configure this rule in each project.
   * Prefer `import/enforce-node-protocol-usage` for enforcing `node:` imports.
   */
  'no-restricted-imports': `off`,

  /**
   * @see https://eslint.org/docs/latest/rules/no-restricted-syntax
   *
   * Restricted syntax is project-specific; configure this rule in each project.
   */
  'no-restricted-syntax': `off`,

  /** @see https://eslint.org/docs/latest/rules/no-underscore-dangle */
  'no-underscore-dangle': `off`,
};
