/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@sandeep-jaiswar/eslint-config"],
  ignorePatterns: ["*.js"], // Ignore CommonJS files like tailwind-preset.js
};
