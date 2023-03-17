module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-console-log': process.env.NODE_ENV === 'production' ? 'error' : 'always',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-constant-condition': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
  },
  ignorePatterns: ['.env', 'tsconfig.json', './dist', './node_modules']
}
