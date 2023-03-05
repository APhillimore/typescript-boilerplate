/** @type {import('eslint').Linter.Config} */
module.exports = {
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    ignorePatterns: ["node_modules", "dist", "build", "docs", "coverage"],
    plugins: ["@typescript-eslint", "prettier"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    rules: {
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn", // or "error"
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
        "linebreak-style": ["error", "unix"],
    },
    root: true,
    globals: {
        process: "readonly",
    },
};
