import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
	{
		files: ["src/**/*.{js,ts}"],
		languageOptions: {
			globals: {
				...globals.node, // Changed from browser to node since this is a Node.js project
			},
			parser: tseslint.parser,
			parserOptions: {
				project: "./tsconfig.json",
				ecmaVersion: 2020,
				sourceType: "module",
			},
		},
		plugins: {
			"@typescript-eslint": tseslint.plugin,
		},
		rules: {
			"@typescript-eslint/no-unused-vars": "error",
			"no-console": "warn",
		},
	},
	{
		ignores: ["dist/*", "node_modules/*"],
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
];
