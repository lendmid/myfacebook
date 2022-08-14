module.exports = {
    bracketSpacing: false,
    semi: false,
    useTabs: false,
    singleQuote: true,
    trailingComma: 'none',
    printWidth: 120,
    tabWidth: 4,
    endOfLine: 'lf',
    arrowParens: 'always',
    overrides: [{
        files: '*.{yaml,json}',
        options: {
            tabWidth: 2,
            singleQuote: false,
        }
    }]
}
