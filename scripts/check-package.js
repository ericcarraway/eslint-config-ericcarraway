/** Smoke-test the tarball in a consumer with no plugins installed. */
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, `..`);
const directory = await mkdtemp(path.join(tmpdir(), `eslint-config-package-`));

try {
  // prepack builds the declarations exactly as it does when publishing.
  execFileSync(`npm`, [`pack`, `--pack-destination`, directory], {
    cwd: root, stdio: `inherit`,
  });
  const manifest = /** @type {{ version: string }} */ (JSON.parse(await readFile(path.join(root, `package.json`), `utf8`)));
  const tarball = path.join(directory,
    `percuss.io-eslint-config-ericcarraway-${manifest.version}.tgz`);

  await writeFile(path.join(directory, `package.json`),
    JSON.stringify({ private: true, type: `module` }));
  // Skip peer installation deliberately: importing plain rule objects needs no plugins.
  execFileSync(`npm`, [`install`, `--offline`, `--ignore-scripts`,
    `--legacy-peer-deps`, `--no-audit`, `--no-fund`, tarball], {
    cwd: directory, stdio: `inherit`,
  });
  execFileSync(process.execPath, [`--input-type=module`, `-e`,
    `import assert from 'node:assert/strict';
     import config, * as sets from '@percuss.io/eslint-config-ericcarraway';
     const { default: unusedDefault, ...named } = sets;
     assert.deepEqual(config.rules, named);
     assert.equal(sets.baseRules['no-loop-func'], 'error');`], {
    cwd: directory, stdio: `inherit`,
  });
  const installed = path.join(directory, `node_modules`, `@percuss.io`, `eslint-config-ericcarraway`);

  assert.match(await readFile(path.join(installed, `LICENSE`), `utf8`), /ISC License/u);
  await writeFile(path.join(directory, `consumer.ts`),
    `import { baseRules } from '@percuss.io/eslint-config-ericcarraway';
     const severity: 'error' = baseRules['no-loop-func'];
     // @ts-expect-error Unknown rule names must be rejected.
     baseRules['nonexistent-rule'];`);
  execFileSync(process.execPath, [path.join(root, `node_modules/typescript/bin/tsc`),
    `--noEmit`, `--strict`, `--module`, `nodenext`, `--target`, `es2022`,
    `--types`, `node`, `--typeRoots`, path.join(root, `node_modules/@types`),
    `consumer.ts`], { cwd: directory, stdio: `inherit` });
} finally {
  await rm(directory, { force: true, recursive: true });
}
