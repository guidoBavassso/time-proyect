import { confgiEslint } from '@formater/config-formater';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
	confgiEslint.ignores,
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			...confgiEslint.languageOptions,
			parserOptions: {
				...confgiEslint.languageOptions.parserOptions,
				ecmaFeatures: { jsx: true },
			},
		},
		settings: { react: { version: '18.3' } },
		plugins: {
			...confgiEslint.plugins,
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...confgiEslint.rules,
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			'react/jsx-no-target-blank': 'off',
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		},
	},
];
