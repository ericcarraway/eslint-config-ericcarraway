/**
 * Structural tests for every exported rule set.
 * Run via `npm test` (Node.js built-in test runner).
 */

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import stylistic from '@stylistic/eslint-plugin';
import { ESLint } from 'eslint';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import importPlugin from 'eslint-plugin-import';
import nPlugin from 'eslint-plugin-n';
import reactPlugin from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import tseslint from 'typescript-eslint';

import * as ruleSets from '../index.js';
import defaultExport from '../index.js';

/** @typedef {import('eslint').ESLint.Plugin} Plugin */

/** Plugins keyed by the namespace each rule set expects. */
const plugins = /** @type {Record<string, Plugin>} */ ({
  '@stylistic': stylistic,
  '@typescript-eslint': tseslint.plugin,
  import: importPlugin,
  n: nPlugin,
  react: reactPlugin,
  'simple-import-sort': simpleImportSort,
  'sort-destructure-keys': sortDestructureKeys,
});

/**
 * The rule namespace(s) allowed in each rule set.
 * An empty string is ESLint core.
 */
const expectedNamespaces = {
  baseRules: [``],
  disabledBasePersonalRules: [``],
  disabledTypescriptExtensionRules: [``],
  disabledTypescriptPersonalRules: [`@typescript-eslint`],
  disabledTypescriptRedundantRules: [``, `import`],
  importRules: [`import`],
  nodeRules: [`n`],
  reactRules: [`react`],
  simpleImportSortRules: [`simple-import-sort`],
  sortDestructureKeysRules: [`sort-destructure-keys`],
  stylisticRules: [`@stylistic`],
  typescriptRules: [`@typescript-eslint`],
};

/**
 * Core rules disabled in `disabledTypescriptExtensionRules` whose
 * typescript-eslint counterpart has a different name.
 */
const renamedExtensionRules = /** @type {Record<string, string>} */ ({
  'no-throw-literal': `only-throw-error`,
});

/** @param {string} ruleName */
const getNamespace = (ruleName) => {
  const slashIndex = ruleName.lastIndexOf(`/`);

  return slashIndex === -1 ? `` : ruleName.slice(0, slashIndex);
};

/** @param {string} ruleName */
const getRule = (ruleName) => {
  const namespace = getNamespace(ruleName);

  if (namespace === ``) {
    // `builtinRules` is the only public API that exposes core rule metadata.
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    return builtinRules.get(ruleName);
  }

  const plugin = /** @type {Plugin | undefined} */ (plugins[namespace]);

  return plugin?.rules?.[ruleName.slice(namespace.length + 1)];
};

/** @param {import('eslint').Linter.RuleEntry} entry */
const getSeverity = (entry) => (Array.isArray(entry) ? entry[0] : entry);

const { default: unusedDefault, ...namedRuleSets } = ruleSets;

/** @type {[string, import('eslint').Linter.RulesRecord][]} */
const ruleSetEntries = Object.entries(namedRuleSets);

const enablingRuleSetNames = Object.keys(namedRuleSets).filter(
  (name) => !name.startsWith(`disabled`),
);

describe(`exports`, () => {
  it(`exports exactly the expected rule sets`, () => {
    assert.deepEqual(
      Object.keys(namedRuleSets).sort(),
      Object.keys(expectedNamespaces).sort(),
    );
  });

  it(`names every rule set "...Rules"`, () => {
    for (const [name] of ruleSetEntries) {
      assert.match(name, /^[a-z][A-Za-z]*Rules$/u);
    }
  });

  it(`includes every named export in the default export`, () => {
    assert.deepEqual(defaultExport.rules, namedRuleSets);
  });
});

for (const [ruleSetName, ruleSet] of ruleSetEntries) {
  describe(ruleSetName, () => {
    it(`is not empty`, () => {
      assert.ok(Object.keys(ruleSet).length > 0);
    });

    it(`only configures rules from its expected namespace(s)`, () => {
      const allowed =
        expectedNamespaces[
          /** @type {keyof typeof expectedNamespaces} */ (ruleSetName)
        ];

      for (const ruleName of Object.keys(ruleSet)) {
        assert.ok(
          allowed.includes(getNamespace(ruleName)),
          `${ruleName} does not belong in ${ruleSetName}`,
        );
      }
    });

    it(`only configures rules that exist`, () => {
      for (const ruleName of Object.keys(ruleSet)) {
        assert.ok(getRule(ruleName), `${ruleName} does not exist`);
      }
    });

    it(`does not configure deprecated rules`, () => {
      for (const ruleName of Object.keys(ruleSet)) {
        const deprecated = getRule(ruleName)?.meta?.deprecated;

        assert.ok(!deprecated, `${ruleName} is deprecated`);
      }
    });

    it(`configures valid rule options`, async () => {
      const eslint = new ESLint({
        overrideConfig: { plugins, rules: ruleSet },
        overrideConfigFile: true,
      });

      // Resolve and validate the config without executing type-aware rules.
      assert.ok(await eslint.calculateConfigForFile(`file.js`));
    });

    if (ruleSetName.startsWith(`disabled`)) {
      it(`only disables rules`, () => {
        for (const [ruleName, entry] of Object.entries(ruleSet)) {
          assert.equal(getSeverity(entry), `off`, `${ruleName} is not "off"`);
        }
      });
    }
  });
}

describe(`organization across rule sets`, () => {
  it(`configures each rule in at most one enabling rule set`, () => {
    /** @type {Map<string, string>} */
    const seen = new Map();

    for (const ruleSetName of enablingRuleSetNames) {
      const ruleSet =
        namedRuleSets[/** @type {keyof typeof namedRuleSets} */ (ruleSetName)];

      for (const ruleName of Object.keys(ruleSet)) {
        const previousRuleSetName = seen.get(ruleName) ?? ``;

        assert.equal(
          previousRuleSetName,
          ``,
          `${ruleName} is in both ${previousRuleSetName} and ${ruleSetName}`,
        );
        seen.set(ruleName, ruleSetName);
      }
    }
  });

  it(`disables each core rule that has a typescript-eslint extension rule`, () => {
    for (const ruleName of Object.keys(
      ruleSets.disabledTypescriptExtensionRules,
    )) {
      const extensionRuleName = renamedExtensionRules[ruleName] ?? ruleName;

      assert.ok(
        getRule(`@typescript-eslint/${extensionRuleName}`),
        `@typescript-eslint/${extensionRuleName} does not exist`,
      );
      assert.ok(
        !(ruleName in ruleSets.baseRules),
        `${ruleName} is enabled in baseRules`,
      );
    }
  });

  it(`only disables redundant rules that another rule set configures`, () => {
    const configured = new Set([
      ...Object.keys(ruleSets.baseRules),
      ...Object.keys(ruleSets.importRules),
    ]);

    for (const ruleName of Object.keys(
      ruleSets.disabledTypescriptRedundantRules,
    )) {
      assert.ok(configured.has(ruleName), `${ruleName} is not configured`);
    }
  });
});
