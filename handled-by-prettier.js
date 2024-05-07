/**
 * A dictionary of rules set to 'off' because they are handled by Prettier.
 *
 * @see https://github.com/prettier/eslint-config-prettier/blob/main/index.js
 *
 * These rules were deprecated in ESLint v8.53.0 (November 2023).
 * They will be removed in the future.
 * @see https://eslint.org/blog/2023/10/deprecating-formatting-rules/
 */
const handledByPrettier = [
  `function-paren-newline`,
  `implicit-arrow-linebreak`,
  `indent`,
  `newline-per-chained-call`,
  `no-confusing-arrow`,
  `object-curly-newline`,
  `operator-linebreak`,
  `wrap-iife`,
].reduce(
  (acc, rule) => ({
    ...acc,
    [rule]: `off`,
  }),
  {},
);

module.exports = { handledByPrettier };
