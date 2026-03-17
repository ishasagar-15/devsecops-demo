import js from "@eslint/js";
import globals from "globals";
import security from "eslint-plugin-security";

export default [
  {
    files: ["**/*.js"],
    plugins: {
      security
    },
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      ...security.configs.recommended.rules
    }
  },
  js.configs.recommended
];
