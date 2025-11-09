// @ts-check
// eslint.config.mjs
import eslint from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  globalIgnores([
    'dist/**',
    'coverage/**',
    'vite.config.ts',
    'vite.iife.config.ts',
    'eslint.config.mjs',
    'docs/.vitepress/cache/**'
  ]),
  {
    files: [
      'src/**/*.ts',
      'test/**/*.ts',
    ],
    rules: {
      semi: ['error', 'never'],
      'prefer-const': 'error',
      'import/newline-after-import': ['error', { count: 1 }],
      'no-extra-semi': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      'import/no-unresolved': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'import/named': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      'no-case-declarations': 'off',
    },
  },
)
