/**
 * Lints this package with its own rule sets.
 * @module eslint.config.js
 */
// @ts-check

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import nPlugin from 'eslint-plugin-n';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import {
  baseRules,
  disabledBasePersonalRules,
  disabledTypescriptExtensionRules,
  disabledTypescriptPersonalRules,
  disabledTypescriptRedundantRules,
  importRules,
  nodeRules,
  simpleImportSortRules,
  sortDestructureKeysRules,
  stylisticRules,
  typescriptRules,
} from './index.js';

export default defineConfig(
  globalIgnores([`types/`]),

  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,

  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: `error`,
      reportUnusedInlineConfigs: `error`,
    },
    plugins: {
      '@stylistic': stylistic,
      import: importPlugin,
      n: nPlugin,
      'simple-import-sort': simpleImportSort,
      'sort-destructure-keys': sortDestructureKeys,
    },
    rules: {
      ...baseRules,
      ...importRules,
      ...nodeRules,
      ...simpleImportSortRules,
      ...sortDestructureKeysRules,
      ...stylisticRules,
      ...typescriptRules,

      ...disabledBasePersonalRules,
      ...disabledTypescriptExtensionRules,
      ...disabledTypescriptPersonalRules,
      ...disabledTypescriptRedundantRules,
    },
  },

  {
    files: [`eslint.config.js`, `index.js`],
    rules: {
      'import/no-default-export': `off`,
    },
  },

  {
    files: [`**/*.d.ts`],
    rules: {
      'import/no-default-export': `off`,
    },
  },

  {
    files: [`test/**`],
    rules: {
      /**
       * `describe()` & `it()` from `node:test` return promises that the runner awaits.
       * @see https://typescript-eslint.io/rules/no-floating-promises/#allowforknownsafecalls
       */
      '@typescript-eslint/no-floating-promises': [
        `error`,
        {
          allowForKnownSafeCalls: [
            { from: `package`, name: [`describe`, `it`], package: `node:test` },
          ],
        },
      ],
    },
  },
);
