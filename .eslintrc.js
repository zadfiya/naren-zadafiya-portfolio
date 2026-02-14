module.exports = {
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 'off',
    'max-len': 'off',
    'no-trailing-spaces': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  overrides: [
    {
      files: [
        '**/*.test.js',
      ],
      plugins: ['jest'],
      env: {
        jest: true,
      },
      // eslint-disable-next-line global-require, import/no-extraneous-dependencies
      ...require('eslint-plugin-jest').configs.recommended,
    },
  ],
};
