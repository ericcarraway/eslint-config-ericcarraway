module.exports = {
  rules: {
    // hoisted functions (in the form of function
    // declarations) are useful since they allow us to push
    // cluttering implementation details away from (below)
    // the usage of a function
    "no-use-before-define": [
      "error",
      {
        functions: false,
      },
    ],

    "operator-linebreak": [
      "error",
      "after",
      {
        overrides: {
          "?": "before",
          ":": "before",
        },
      },
    ],

    quotes: ["error", "backtick"],
  },
};
