module.exports = {
  "rules": {
    "operator-linebreak": ["error", "after", {
      "overrides": {
        "?": "before",
        ":": "before"
      }
    }],

    "quotes": ["error", "backtick"],
  }
};