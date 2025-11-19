const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const typescriptParser = require("@typescript-eslint/parser");
const typescriptPlugin = require("@typescript-eslint/eslint-plugin");

const compat = new FlatCompat();

module.exports = [
  {
    ignores: ["eslint.config.js"],
  },
  js.configs.recommended,
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
