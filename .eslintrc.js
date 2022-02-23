module.exports = {
  extends: ['plugin:import/errors'],
  plugins: ['import'],
  env: {
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: 'impliedStrict',
  },
  rules: {},
};
