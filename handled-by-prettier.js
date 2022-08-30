/**
 * A dictionary of rules set to 'off' because they are handled by Prettier.
 *
 * @see https://github.com/prettier/eslint-config-prettier/blob/main/index.js
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
