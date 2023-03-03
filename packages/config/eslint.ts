import type { Linter } from 'eslint';

/** @type {import('eslint').Linter.Config} */
const Config = {
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	plugins: ['@typescript-eslint', 'prettier'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn', // or "error"
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		'linebreak-style': ['error', 'unix'],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	root: true,
	globals: {
		process: 'readonly',
	},
};

export default Config;
