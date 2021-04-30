module.exports = {
  env: {
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          [
            '@components',
            './src/components',
          ],
          [
            '@resources',
            './resources',
          ],
          [
            '@internal_connector',
            '../internal_connector/src',
          ],
          [
            '@domain',
            './src/domain',
          ],
        ],
        extensions: [
          '.ts',
          '.js',
          '.jsx',
          '.json',
        ],
      },
    },
  },
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
    ],
    'linebreak-style': 'off',
    'max-len': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-console': 'off',
  },
};
