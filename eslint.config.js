// eslint.config.js
const { defineConfig } = require('eslint/config');
const js = require('@eslint/js'); // <-- Tilføj dette
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  js.configs.recommended, // <-- Tilføj dette for at aktivere JS-syntaksregler
  expoConfig,
  {
    ignores: ['dist/*'],
    rules: {
      semi: ['error', 'always'], // Gør semikolon påkrævet
      // Du kan også tilføje:
      'comma-dangle': ['error', 'never'], // Fejl ved ekstra komma
    },
  },
]);
