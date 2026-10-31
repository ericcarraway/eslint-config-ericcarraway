/**
 * Shareable ESLint rule sets for percuss.io JavaScript & TypeScript projects.
 *
 * Each export is a plain rules object to spread into a flat config's `rules`.
 * Spread the rule sets that enable rules first, then the `disabled...` rule sets.
 * Register the matching plugin under the expected namespace in your config:
 *
 * | Rule set                            | Plugin namespace        |
 * | ----------------------------------- | ----------------------- |
 * | `baseRules`                         | (ESLint core)           |
 * | `importRules`                       | `import`                |
 * | `nodeRules`                         | `n`                     |
 * | `reactRules`                        | `react`                 |
 * | `simpleImportSortRules`             | `simple-import-sort`    |
 * | `sortDestructureKeysRules`          | `sort-destructure-keys` |
 * | `stylisticRules`                    | `@stylistic`            |
 * | `typescriptRules`                   | `@typescript-eslint`    |
 * | `disabledBasePersonalRules`         | (ESLint core)           |
 * | `disabledTypescriptExtensionRules`  | (ESLint core)           |
 * | `disabledTypescriptPersonalRules`   | `@typescript-eslint`    |
 * | `disabledTypescriptRedundantRules`  | (ESLint core), `import` |
 *
 * @module @percuss.io/eslint-config-ericcarraway
 * @see https://github.com/ericcarraway/eslint-config-ericcarraway#readme
 */

import { baseRules } from './rules/base.js';
import { disabledBasePersonalRules } from './rules/disabled-base-personal.js';
import { disabledTypescriptExtensionRules } from './rules/disabled-typescript-extension.js';
import { disabledTypescriptPersonalRules } from './rules/disabled-typescript-personal.js';
import { disabledTypescriptRedundantRules } from './rules/disabled-typescript-redundant.js';
import { importRules } from './rules/import.js';
import { nodeRules } from './rules/node.js';
import { reactRules } from './rules/react.js';
import { simpleImportSortRules } from './rules/simple-import-sort.js';
import { sortDestructureKeysRules } from './rules/sort-destructure-keys.js';
import { stylisticRules } from './rules/stylistic.js';
import { typescriptRules } from './rules/typescript.js';

export {
  baseRules,
  disabledBasePersonalRules,
  disabledTypescriptExtensionRules,
  disabledTypescriptPersonalRules,
  disabledTypescriptRedundantRules,
  importRules,
  nodeRules,
  reactRules,
  simpleImportSortRules,
  sortDestructureKeysRules,
  stylisticRules,
  typescriptRules,
};

/** Every rule set, keyed by its export name. */
export default {
  rules: {
    baseRules,
    disabledBasePersonalRules,
    disabledTypescriptExtensionRules,
    disabledTypescriptPersonalRules,
    disabledTypescriptRedundantRules,
    importRules,
    nodeRules,
    reactRules,
    simpleImportSortRules,
    sortDestructureKeysRules,
    stylisticRules,
    typescriptRules,
  },
};
