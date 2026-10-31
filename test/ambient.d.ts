// `eslint-plugin-sort-destructure-keys` does not ship type declarations.
declare module 'eslint-plugin-sort-destructure-keys' {
  import type { ESLint } from 'eslint';

  const plugin: ESLint.Plugin;

  export default plugin;
}
