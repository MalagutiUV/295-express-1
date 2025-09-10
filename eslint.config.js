// ESM-Variante
import js from '@eslint/js';
import globals from 'globals';
import pluginImport from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { ignores: ['node_modules', 'dist', '**/*.d.ts'] },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.node },
    },
    plugins: { import: pluginImport },
    settings: {
      'import/resolver': {
        node: { extensions: ['.js', '.json'] },
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'error', // markiert fehlende Variablen (z. B. vergessener Import)
      'import/no-unresolved': 'error', // markiert kaputte/falsche Import-Pfade
      'import/extensions': ['error', 'always'], // ESM: .js-Endungen erzwingen
    },
  },
  // Prettier zuletzt, um Stilkonflikte zu neutralisieren
  eslintConfigPrettier,
];
