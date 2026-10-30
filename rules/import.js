/** @import { Linter } from 'eslint' */

/**
 * Rules from `eslint-plugin-import`.
 * @see https://github.com/import-js/eslint-plugin-import
 *
 * @satisfies {Linter.RulesRecord}
 */
export const importRules = {
  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md */
  'import/consistent-type-specifier-style': [`error`, `prefer-top-level`],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md */
  'import/default': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md */
  'import/dynamic-import-chunkname': [
    `off`,
    {
      importFunctions: [],
      webpackChunknameFormat: `[0-9a-zA-Z-_/.]+`,
    },
  ],

  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/enforce-node-protocol-usage.md
   *
   * Require the `node:` protocol for Node.js built-in modules (e.g. `node:fs`).
   */
  'import/enforce-node-protocol-usage': [`error`, `always`],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md */
  'import/export': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md */
  'import/exports-last': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md */
  'import/extensions': [`off`, `ignorePackages`],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md */
  'import/first': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md */
  'import/group-exports': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md */
  'import/max-dependencies': [
    `off`,
    {
      max: 10,
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md */
  'import/named': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md */
  'import/namespace': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md */
  'import/newline-after-import': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md */
  'import/no-absolute-path': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md */
  'import/no-amd': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md */
  'import/no-anonymous-default-export': [
    `off`,
    {
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowArray: false,
      allowArrowFunction: false,
      allowLiteral: false,
      allowObject: false,
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md */
  'import/no-commonjs': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md */
  'import/no-cycle': [
    `error`,
    {
      allowUnsafeDynamicCyclicDependency: false,
      ignoreExternal: false,
      maxDepth: `∞`,
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md */
  'import/no-default-export': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md */
  'import/no-deprecated': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md */
  'import/no-duplicates': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md */
  'import/no-dynamic-require': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md */
  'import/no-extraneous-dependencies': [
    `error`,
    {
      devDependencies: [
        `**/*.spec.js`,
        `**/*.spec.ts`,
        `**/*.test.js`,
        `**/*.test.ts`,
        `**/eslint.config.js`,
        `**/eslint.config.mjs`,
      ],
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md */
  'import/no-import-module-exports': [
    `error`,
    {
      exceptions: [],
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md */
  'import/no-internal-modules': [
    `off`,
    {
      allow: [],
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md */
  'import/no-mutable-exports': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md */
  'import/no-named-as-default': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md */
  'import/no-named-as-default-member': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md */
  'import/no-named-default': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md */
  'import/no-named-export': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md */
  'import/no-namespace': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md */
  'import/no-nodejs-modules': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md */
  'import/no-relative-packages': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md */
  'import/no-relative-parent-imports': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md */
  'import/no-restricted-paths': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md */
  'import/no-self-import': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md */
  'import/no-unassigned-import': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md */
  'import/no-unresolved': [
    `off`,
    {
      caseSensitive: true,
      caseSensitiveStrict: false,
      commonjs: true,
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md */
  'import/no-unused-modules': [
    `off`,
    {
      ignoreExports: [],
      missingExports: true,
      unusedExports: true,
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md */
  'import/no-useless-path-segments': [
    `error`,
    {
      commonjs: true,
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md */
  'import/no-webpack-loader-syntax': `error`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md */
  'import/order': [
    `error`,
    {
      distinctGroup: true,
      groups: [[`builtin`, `external`, `internal`]],
      warnOnUnassignedImports: false,
    },
  ],

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md */
  'import/prefer-default-export': `off`,

  /** @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md */
  'import/unambiguous': `off`,
};
