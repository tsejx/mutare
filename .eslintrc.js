module.exports = {
    extends: ['plugin:import/errors'],
    plugins: ['import'],
    env: {
        es6: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: 'impliedStrict'
    },
    rules: {

    },
};
