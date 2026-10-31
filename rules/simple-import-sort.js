/** @import { Linter } from 'eslint' */

/**
 * Import & export sorting from `eslint-plugin-simple-import-sort`.
 * @see https://github.com/lydell/eslint-plugin-simple-import-sort
 *
 * @satisfies {Linter.RulesRecord}
 */
export const simpleImportSortRules = {
  'simple-import-sort/exports': `error`,
  'simple-import-sort/imports': [
    `error`,
    {
      /**
       * @see https://github.com/lydell/eslint-plugin-simple-import-sort?tab=readme-ov-file#custom-grouping
       */
      groups: [
        // Side effect imports.
        [`^\\u0000`],

        // Node.js builtins prefixed with `node:`.
        [`^node:`],

        // Packages.
        // Things that start with a letter (or digit or underscore),
        // or `@` followed by a letter.
        [`^@?\\w`],

        // Absolute imports and other imports such as Vue-style `@/foo`.
        // Anything not matched in another group.
        [`^`],

        // Things that start with a "#".
        [`^#`],

        // Relative imports.
        // Anything that starts with a dot.
        [`^\\.`],
      ],
    },
  ],
};
