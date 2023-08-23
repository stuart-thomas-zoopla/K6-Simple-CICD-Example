module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "ignorePatterns": ['.eslintrc.js'],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "globals": {
        "__ENV": "readonly",
        "__ITER": "readonly"
    },
    "rules": {
        "k6-linting-rules/k6": 2
    },
    "plugins": [
        "k6-linting-rules"
    ]
}
