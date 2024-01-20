module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-duplicate-imports': 'error',
    'react/display-name': 0,
    'react/prop-types': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-extra-boolean-cast': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off'
  },
}