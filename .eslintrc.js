module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    // Prettier formatting rules
    'prettier/prettier': 'error',

    // General rules
    'no-console': 'off', // Allow console.log for CLI apps
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-undef': 'off', // TypeScript handles this
    'no-constant-condition': 'off', // Allow while(true) loops in CLI apps
    'no-case-declarations': 'off', // Allow let/const in switch cases
  },
  env: {
    node: true,
    es6: true,
  },
};
