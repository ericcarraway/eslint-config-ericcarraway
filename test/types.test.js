/**
 * Type tests for the published declarations (`types/`).
 *
 * This file imports the package by name, so TypeScript resolves the
 * generated declarations through `package.json#exports` exactly as consumers do.
 * `npm run typecheck` checks the types; `node --test` runs the assertions.
 */

import assert from 'node:assert/strict';
import { it } from 'node:test';

import eslintConfig, {
  baseRules,
  disabledTypescriptRedundantRules,
  typescriptRules,
} from '@percuss.io/eslint-config-ericcarraway';
import { defineConfig } from 'eslint/config';

/** @typedef {import('eslint').Linter.RuleEntry} RuleEntry */

it(`extends a rule's options without casts`, () => {
  /** @type {RuleEntry} */
  const restrictedGlobals = [
    ...baseRules[`no-restricted-globals`],
    { message: `Use the env module instead.`, name: `process` },
  ];

  assert.equal(restrictedGlobals[0], `error`);
});

it(`reuses a rule's entry as-is in another config block`, () => {
  /** @type {RuleEntry} */
  const restrictedProperties = baseRules[`no-restricted-properties`];

  assert.equal(restrictedProperties[0], `error`);
});

it(`exposes exact severities and options`, () => {
  /** @type {`error`} */
  const severity = typescriptRules[`@typescript-eslint/array-type`];

  /** @type {`off`} */
  const off = disabledTypescriptRedundantRules[`no-undef`];

  assert.equal(severity, `error`);
  assert.equal(off, `off`);
});

it(`rejects unknown rule names`, () => {
  // @ts-expect-error A misspelled rule name is a type error.
  const misspelled = baseRules[`no-restricted-globalz`];

  assert.equal(typeof misspelled, `undefined`);
});

it(`spreads every rule set into defineConfig()`, () => {
  const config = defineConfig({
    rules: {
      ...eslintConfig.rules.baseRules,
      ...eslintConfig.rules.importRules,
      ...eslintConfig.rules.nodeRules,
      ...eslintConfig.rules.reactRules,
      ...eslintConfig.rules.simpleImportSortRules,
      ...eslintConfig.rules.sortDestructureKeysRules,
      ...eslintConfig.rules.stylisticRules,
      ...eslintConfig.rules.typescriptRules,
      ...eslintConfig.rules.disabledBasePersonalRules,
      ...eslintConfig.rules.disabledTypescriptExtensionRules,
      ...eslintConfig.rules.disabledTypescriptPersonalRules,
    },
  });

  assert.equal(config.length, 1);
});
