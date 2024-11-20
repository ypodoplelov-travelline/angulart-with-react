/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  ignorePatterns: ['index.html', '*.html'],
  overrides: [
    {
      files: ['**/*.config.ts', '**/*.page.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/*.action.ts', '**/*.store.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ]
};
