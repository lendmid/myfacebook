module.exports = {
    root: true,
    env: {browser: true, es6: true, jest: true},

    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'prettier',
    ],

    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaFeatures: {jsx: true},
        ecmaVersion: 2020,
        sourceType: 'module',
        'project': './tsconfig.json',
        'tsconfigRootDir': './frontend '
    },

    settings: {
        'import/resolver': {
            node: {extensions: ['.js', '.jsx', '.ts', '.tsx']},
            'typescript': {}
        },
    },

    plugins: ['react', '@typescript-eslint', 'import', 'react-hooks', 'prettier'],

    rules: {
        'semi': ['error', 'never'],
        'object-curly-newline': ['off'],
        'quotes': ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-double'],
        'max-len': ['error', {code: 180}],
        'arrow-parens': ['error', 'always'],
        'eol-last': ['error', 'always'],
        'max-lines': ['error', 500],
        'no-console': ['error', {allow: ['warn', 'error']}],
        'no-unused-vars': 'off',

        'import/extensions': ['error', 'ignorePackages', {js: 'never', jsx: 'never', ts: 'never', tsx: 'never'}],
        'import/no-useless-path-segments': ['error', {noUselessIndex: true}],
        'import/order': ['error', {alphabetize: {order: 'asc', caseInsensitive: true}}],
        'import/no-unresolved': 'off',

        'react/no-adjacent-inline-elements': 'error',
        'react/no-array-index-key': 'warn',
        'react/no-danger': 'error',
        'react/jsx-filename-extension': ['error', {extensions: ['.jsx', '.tsx']}],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-handler-names': 'error',
        'react/jsx-key': 'error',
        'react/jsx-no-bind': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-script-url': 'error',
        'react/jsx-sort-props': ['error', {ignoreCase: true, shorthandLast: true, reservedFirst: ['key']}],
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-brace-presence': ['error', 'never'],
        'react/jsx-closing-bracket-location': [1, 'line-aligned'],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        '@typescript-eslint/no-explicit-any': ['error'],
        '@typescript-eslint/member-delimiter-style': ['error', {
            "multiline": {
                "delimiter": "none",
                "requireLast": false
            },
            "singleline": {
                "delimiter": "semi",
                "requireLast": false
            },
            "multilineDetection": "brackets"
        }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
            },
        ],

        'prettier/prettier': ['error', {'endOfLine': 'auto'}],
    },
    ignorePatterns: ['tools', '.eslintrc.js', 'webpack.config.ts', 'node_modules', 'out'],
};
