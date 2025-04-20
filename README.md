# eslint-config-ericcarraway

Shareable ESLint config for percuss.io JavaScript projects.

### 1. Install

https://www.npmjs.com/package/@percuss.io/eslint-config-ericcarraway

```shell
$ npm i --save-dev @percuss.io/eslint-config-ericcarraway
```

_This command will install this package & save it to your project's `devDependencies`._

### 2. Install peer dependencies

```shell
npm install --save-dev @eslint/js @stylistic/eslint-plugin eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-sort-destructure-keys typescript-eslint
```

The following peer dependencies are required:

- [@eslint/js](https://www.npmjs.com/package/@eslint/js)
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)
- [eslint-plugin-sort-destructure-keys](https://www.npmjs.com/package/eslint-plugin-sort-destructure-keys)
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint)

## Usage

Create an `eslint.config.mjs` file in your project root with the following content:

```js
/**
 * @module eslint.config.mjs
 */
// @ts-check

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import eslint from '@eslint/js';
import {
  baseRules,
  deprecatedNodeCommonJsRules,
  disabledBasePersonalRules,
  disabledTypescriptExtensionRules,
  disabledTypescriptPersonalRules,
  importRules,
  simpleImportSortRules,
  sortDestructureKeysRules,
  stylisticRules,
  typescriptRules,
} from '@percuss.io/eslint-config-ericcarraway';
import stylistic from '@stylistic/eslint-plugin';
import { flatConfigs as eslintPluginImport } from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import tseslint, { configs as tseslintConfigs } from 'typescript-eslint';

const directory = dirname(fileURLToPath(import.meta.url));

const lintConfig = tseslint.config(
  {
    ignores: [
      // Add files/directories to ignore
    ],
  },
  eslint.configs.recommended,

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  eslintPluginImport.recommended,

  tseslintConfigs.strictTypeChecked,
  tseslintConfigs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            //
            `.prettierrc.cjs`,
            `*.cjs`,
            `*.js`,
            `*.mjs`,
          ],
        },
        tsconfigRootDir: directory,
      },
    },
  },
  {
    plugins: {
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSort,
      'sort-destructure-keys': sortDestructureKeys,
    },
  },
  {
    rules: {
      ...baseRules,
      ...deprecatedNodeCommonJsRules,
      ...disabledBasePersonalRules,
      ...disabledTypescriptExtensionRules,
      ...disabledTypescriptPersonalRules,
      ...importRules,
      ...simpleImportSortRules,
      ...sortDestructureKeysRules,
      ...stylisticRules,
      ...typescriptRules,
    },
  },
);

// eslint-disable-next-line import/no-default-export
export default lintConfig;
```

## License

ISC
