/** Consumer checks for the configuration documented in the README. */
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { it } from 'node:test';

import { ESLint } from 'eslint';

it(`lints JavaScript, TypeScript, and modern JSX with the documented config`, async () => {
  const root = path.resolve(import.meta.dirname, `..`);
  const directory = await mkdtemp(path.join(root, `.consumer-`));

  try {
    const readme = await readFile(path.join(root, `README.md`), `utf8`);
    const usage = readme.split(`\n\x60\x60\x60js\n`)[1]?.split(`\n\x60\x60\x60`)[0];
    const react = readme.split(`\n\x60\x60\x60js\n`)[2]?.split(`\n\x60\x60\x60`)[0];

    assert.ok(usage);
    assert.ok(react);

    const reactImports = react.split(`// ...`)[0];
    const reactConfig = react.split(`// ...`)[1];

    assert.ok(reactConfig);
    await writeFile(path.join(directory, `eslint.config.mjs`),
      reactImports + usage.replace(/\);\s*$/u, `${reactConfig}\n);`));
    await writeFile(path.join(directory, `tsconfig.json`), JSON.stringify({
      compilerOptions: {
        allowJs: true,
        checkJs: true,
        jsx: `react-jsx`,
        module: `nodenext`,
        noEmit: true,
        strict: true,
        target: `es2022`,
      },
      include: [`**/*`],
    }));
    await writeFile(path.join(directory, `valid.js`), `export const answer = 42;\n`);
    await writeFile(path.join(directory, `floating.ts`),
      `export function run(): void { Promise.resolve(1); }\n`);
    await writeFile(path.join(directory, `component.tsx`),
      `export function App() { return <div />; }\n`);
    await writeFile(path.join(directory, `protocol.js`),
      `import path from 'path';\nexport const separator = path.sep;\n`);

    const eslint = new ESLint({ cwd: directory });
    const results = await eslint.lintFiles([`valid.js`, `floating.ts`, `component.tsx`]);
    const [javascript, typescript, jsx] = results;

    assert.equal(javascript.errorCount, 0, JSON.stringify(javascript.messages));
    assert.ok(typescript.messages.some((message) =>
      message.ruleId === `@typescript-eslint/no-floating-promises`));
    assert.equal(jsx.fatalErrorCount, 0, JSON.stringify(jsx.messages));
    assert.ok(!jsx.messages.some((message) =>
      message.ruleId === `react/react-in-jsx-scope`));

    const fixer = new ESLint({ cwd: directory, fix: true });
    const [fixed] = await fixer.lintFiles([`protocol.js`]);

    assert.ok(fixed.output?.includes(`node:path`));
  } finally {
    await rm(directory, { force: true, recursive: true });
  }
});
