const getPresets = isTypeScript =>
  [
    ...(isTypeScript ? ['airbnb-typescript'] : ['airbnb']),
    'airbnb/hooks',
    'plugin:promise/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:prettier/recommended',
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
  extends: getPresets(),
  parser: '@babel/eslint-parser',
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['config/**/*.js', '*.config.js'] },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['jsx'] }],
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      extends: getPresets(true),
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'react/jsx-filename-extension': ['error', { extensions: ['tsx'] }],
        'prettier/prettier': 'error',
      },
    },
  ],
};
