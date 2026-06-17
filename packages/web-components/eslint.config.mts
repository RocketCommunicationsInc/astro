import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import json from '@eslint/json'
import css from '@eslint/css'
import { defineConfig, globalIgnores } from 'eslint/config'
import stencil from '@stencil/eslint-plugin'

export default defineConfig([
    globalIgnores([
        'src/stories',
        '**/*.spec.tsx',
        '**/*.spec.ts',
        'src/tests',
    ]),
    stencil.configs.flat.recommended,
    tseslint.configs.base,
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,tsx}'],
        plugins: { js },
        extends: ['js/recommended'],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                projectService: true,
            },
        },

        rules: {
            'stencil/decorators-style': 'off',
            'stencil/strict-boolean-conditions': 'off',
            'stencil/ban-exported-const-enums': 'off',
            'no-undef': 'off',
            'no-unused-vars': 'off',
            'no-prototype-builtins': 'off',
        },
    },
    {
        files: ['**/*.json'],
        plugins: { json },
        language: 'json/json',
        extends: ['json/recommended'],
    },
    {
        files: ['**/*.css'],
        plugins: { css },
        language: 'css/css',
        extends: ['css/recommended'],
    },
])
