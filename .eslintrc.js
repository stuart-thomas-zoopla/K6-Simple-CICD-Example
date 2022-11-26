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
        "import/no-unresolved": 0, // k6 is actually golang, can't really import it
        "no-restricted-globals": 0, // required by k6, e.g. "init" context
        "import/extensions": 0, // .js ending is ok
        "no-prototype-builtins": 0, // k6 assertions
        "semi": 1,
        "quotes": 2

    }
}
