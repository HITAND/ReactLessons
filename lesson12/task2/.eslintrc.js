module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  overrides: [],
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    "arrow-body-style": 1,
    "prefer-arrow-callback": 1,
    "react/prop-types": 0,
    "no-unused-vars": 1,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
