const { resolve } = require('node:path')
const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: [
    './typescript.js', 'plugin:react/recommended',
    ...[
      "@vercel/style-guide/eslint/browser",
      "@vercel/style-guide/eslint/typescript",
      "@vercel/style-guide/eslint/react",
    ].map(require.resolve),
  ],
  plugins: ['react'],
  settings: {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    "import/resolver": {
      typescript: {
        project,
      },
    },
    react: {
      version: 'detect',
    },
  },

  parserOptions: {
    project,
  },
  rules: {
    'import/order': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-leaked-render': [1, { "validStrategies": ["coerce"] }],
    camelcase: 'error',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    "import/no-extraneous-dependencies": 'off'
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'spaced-comment': 'off',
      }
    },
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
}
