# eslint-config-ericcarraway

Shareable ESLint rule sets for percuss.io JavaScript & TypeScript projects.

https://www.npmjs.com/package/@percuss.io/eslint-config-ericcarraway

This package exports **rule sets**: plain `rules` objects that you spread into your own [flat config](https://eslint.org/docs/latest/use/configure/configuration-files). You stay in control of plugins, parsers, files, and ignores.

## Install

```shell
npm install --save-dev @percuss.io/eslint-config-ericcarraway
```

Install the plugins for the rule sets you use. For the full example below:

```shell
npm install --save-dev eslint@^9 @eslint/js@^9 @stylistic/eslint-plugin eslint-plugin-import eslint-plugin-n eslint-plugin-simple-import-sort eslint-plugin-sort-destructure-keys typescript typescript-eslint globals
```

ESLint is required. All plugin peers are optional; install each plugin whose rule set you enable.

For React projects, also install `eslint-plugin-react`.

| Peer dependency                                                                                          | Version   | Used by                        |
| -------------------------------------------------------------------------------------------------------- | --------- | ------------------------------ |
| [eslint](https://www.npmjs.com/package/eslint)                                                           | `^9.39.5` | all                            |
| [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)                       | `^5.10.0` | `stylisticRules`               |
| [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)                               | `^2.32.0` | `importRules`                  |
| [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)                                         | `^18.5.0` | `nodeRules`                    |
| [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) (optional)                      | `^7.37.5` | `reactRules`                   |
| [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)       | `^14.0.0` | `simpleImportSortRules`        |
| [eslint-plugin-sort-destructure-keys](https://www.npmjs.com/package/eslint-plugin-sort-destructure-keys) | `^3.0.0`  | `sortDestructureKeysRules`     |
| [typescript-eslint](https://www.npmjs.com/package/typescript-eslint)                                     | `^8.72.1` | `typescriptRules`, `disabled…` |

> **Why ESLint 9?** `eslint-plugin-import` and `eslint-plugin-react` do not support ESLint 10 yet.

## Rule sets

Spread the rule sets that **enable** rules first, then the rule sets that **disable** rules.

### Enable

| Rule set                   | Plugin namespace        | Contents                                                      |
| -------------------------- | ----------------------- | ------------------------------------------------------------- |
| `baseRules`                | (ESLint core)           | Core ESLint rules                                             |
| `importRules`              | `import`                | `eslint-plugin-import`, incl. `node:` protocol enforcement    |
| `nodeRules`                | `n`                     | `eslint-plugin-n` replacements for deprecated core Node rules |
| `reactRules`               | `react`                 | `eslint-plugin-react`                                         |
| `simpleImportSortRules`    | `simple-import-sort`    | Import & export sorting                                       |
| `sortDestructureKeysRules` | `sort-destructure-keys` | Sorting of destructured keys                                  |
| `stylisticRules`           | `@stylistic`            | Formatting rules from ESLint Stylistic                        |
| `typescriptRules`          | `@typescript-eslint`    | typescript-eslint rules, incl. "extension" rules              |

### Disable

| Rule set                           | Disables                                                                             | Apply to         |
| ---------------------------------- | ------------------------------------------------------------------------------------ | ---------------- |
| `disabledBasePersonalRules`        | Core rules turned off by preference or that are project-specific                     | all files        |
| `disabledTypescriptExtensionRules` | Core rules replaced by typescript-eslint extension rules                             | all files        |
| `disabledTypescriptPersonalRules`  | typescript-eslint rules turned off by preference (incl. ones in `strictTypeChecked`) | all files        |
| `disabledTypescriptRedundantRules` | Rules the TypeScript compiler already enforces (`no-undef`, `import/named`, …)       | TypeScript files |

Every rule set is fully typed: rule names are exact keys and each entry has its exact severity & options. Hover a rule in your editor to see its documentation link.

## Usage

This example uses typed linting for both JavaScript and TypeScript. Ensure the linted files belong to your `tsconfig.json`; for JavaScript, enable `allowJs` (and `checkJs` if you also want compiler diagnostics). For example:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "strict": true,
    "noEmit": true,
    "module": "nodenext",
    "target": "es2022"
  },
  "include": ["src/**/*", "eslint.config.mjs"]
}
```

For a few files outside the project, use a narrow `projectService.allowDefaultProject` list, such as `['eslint.config.mjs']`, instead of `projectService: true`. Alternatively, scope typed linting to project files and use `tseslint.configs.disableTypeChecked` for other files. See the [typed linting troubleshooting guide](https://typescript-eslint.io/troubleshooting/typed-linting/).

`eslint.config.mjs`:

```js
// @ts-check

import eslint from '@eslint/js';
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
} from '@percuss.io/eslint-config-ericcarraway';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import nPlugin from 'eslint-plugin-n';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  globalIgnores([
    'dist/', // Add other generated files/directories here.
  ]),

  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,

  {
    languageOptions: {
      // Use globals.browser for browser projects, or scope globals by file.
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
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
    },
  },

  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules: disabledTypescriptRedundantRules,
  },
);
```

### React

Register `eslint-plugin-react` and spread `reactRules`:

```js
import { reactRules } from '@percuss.io/eslint-config-ericcarraway';
import reactPlugin from 'eslint-plugin-react';

// ...
  {
    files: ['**/*.{jsx,tsx}'],
    ...reactPlugin.configs.flat.recommended,
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactRules,
      ...reactPlugin.configs.flat['jsx-runtime'].rules,
    },
    settings: { react: { version: 'detect' } },
  },
```

The `jsx-runtime` rules support the modern JSX transform, which does not require importing React. Omit that spread for the classic transform. For TypeScript projects, also configure `compilerOptions.jsx` (for example, `"react-jsx"`).

### Extending a rule's options

Rule entries are typed tuples, so you can extend them without casts:

```js
rules: {
  'no-restricted-globals': [
    ...baseRules['no-restricted-globals'],
    { message: 'Use the env module instead.', name: 'process' },
  ],
},
```

### TypeScript: `eslint-plugin-sort-destructure-keys` types

`eslint-plugin-sort-destructure-keys` does not ship type declarations. If you type-check your `eslint.config.mjs`, add an ambient declaration (e.g. `types.d.ts`):

```ts
declare module 'eslint-plugin-sort-destructure-keys' {
  import type { ESLint } from 'eslint';

  const plugin: ESLint.Plugin;

  export default plugin;
}
```

## Migrating from v8

- **Runtime compatibility:** Node.js `^20.19.0 || ^22.13.0 || >=24` and ESLint `^9.39.5` are required. Install the plugin versions in the peer table for the rule sets you use; plugin peers are optional so unused rule sets do not require their plugins.

- **`deprecatedNodeCommonJsRules` was removed.** Use `nodeRules` and register `eslint-plugin-n` as `n`. The deprecated core rules `global-require`, `no-new-require`, `no-path-concat` & `no-buffer-constructor` are replaced by `n/global-require`, `n/no-new-require`, `n/no-path-concat` & `n/no-deprecated-api`.
- **Broader Node deprecation checks:** `n/no-deprecated-api` reports other deprecated Node APIs as well as Buffer constructor usage; expect additional diagnostics.
- **`@typescript-eslint/no-restricted-imports` → `no-restricted-imports`.** typescript-eslint deprecated its extension rule; the core rule now supports TypeScript (incl. `allowTypeImports`). Configure `no-restricted-imports` per project.
- **`node:` imports are enforced by `import/enforce-node-protocol-usage`** (auto-fixable) instead of a list in `no-restricted-imports`.
- **`@typescript-eslint/no-loop-func` → `no-loop-func`.** The core rule is now enabled in `baseRules`.
- **`@typescript-eslint/no-unnecessary-type-arguments` is now disabled** in `disabledTypescriptPersonalRules`.
- **New: `disabledTypescriptRedundantRules`.** Apply it to TypeScript files to turn off `no-undef` & `eslint-plugin-import` rules that TypeScript already enforces. You no longer need to declare globals like `React` or `fetch` in TypeScript files.
- **Types are generated from the source**, so every rule set has exact keys & entry types. Remove casts like `/** @type {unknown[]} */`.
- **The default export now includes every rule set**, including `reactRules`.

## Development

| Script              | Purpose                                                             |
| ------------------- | ------------------------------------------------------------------- |
| `npm run build`     | Generate `types/` from the JSDoc in `index.js` & `rules/*.js`       |
| `npm test`          | Build, run the tests, type-check, and lint (this repo lints itself) |
| `npm run typecheck` | Type-check the source & the published types                         |
| `npm run lint`      | Lint this repo with its own rule sets                               |

The tests check that every rule set only configures rules that exist, are not deprecated, have valid options, and belong to its plugin namespace.

## License

ISC
