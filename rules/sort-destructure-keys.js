/** @import { Linter } from 'eslint' */

/**
 * Sorting of destructured keys from `eslint-plugin-sort-destructure-keys`.
 * @see https://github.com/mthadley/eslint-plugin-sort-destructure-keys
 *
 * @satisfies {Linter.RulesRecord}
 */
export const sortDestructureKeysRules = {
  'sort-destructure-keys/sort-destructure-keys': [
    `error`,
    {
      caseSensitive: false,
    },
  ],
};
