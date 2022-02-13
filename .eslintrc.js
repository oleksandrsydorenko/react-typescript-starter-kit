const getPresets = isTypeScript =>
  [
    'airbnb',
    isTypeScript && 'airbnb-typescript',
    'airbnb/hooks',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'prettier',
  ].filter(Boolean);

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    serviceworker: true,
    worker: true,
  },
  extends: getPresets(false),
  parser: '@babel/eslint-parser',
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['config/**/*.js', '*.config.js'] },
    ],
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      extends: getPresets(true),
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'react/function-component-definition': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['tsx'] }],
        'prettier/prettier': 'error',
      },
    },
  ],
};
