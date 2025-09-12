import js from '@eslint/js'
import { globalIgnores } from 'eslint/config'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
    [
        globalIgnores(['node_modules', 'dist', 'coverage']),
        {
            files: ['**/*.{ts,tsx}'],
            extends: [
                js.configs.recommended,
                ...tseslint.configs.recommendedTypeChecked,
                reactHooks.configs['recommended-latest'],
                reactRefresh.configs.vite,
            ],
            languageOptions: {
                ecmaVersion: 2023,
                sourceType: 'module',
                globals: globals.browser,
                parserOptions: {
                    projectService: true,
                    tsconfigRootDir: import.meta.dirname,
                },
            },
        },
    ],
    storybook.configs['flat/recommended'],
]
