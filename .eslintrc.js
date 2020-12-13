const getPresets = isTypeScript =>
  [
    ...(isTypeScript
      ? [
          // Airbnb rules for TypeScript
          'airbnb-typescript',
        ]
      : [
          // Airbnb rules for JavaScript
          'airbnb',
        ]),
    // Airbnb's rules for React hooks
    'airbnb/hooks',
    // rules for Jest
    'plugin:jest/recommended',
    // extended rules for Jest
    'plugin:jest/style',
    // extends eslint-config-prettier and allows to run Prettier rules as the Eslint ones
    'plugin:prettier/recommended',
    // rules for Promises
    'plugin:promise/recommended',
    // disables ESLint rules that can conflict with Prettier
    'prettier',
    // disables @typescript-eslint rules that can conflict with Prettier
    isTypeScript && 'prettier/@typescript-eslint',
    // disables babel-eslint rules that can conflict with Prettier
    'prettier/babel',
    // disables eslint-plugin-react rules that can conflict with Prettier
    'prettier/react',
  ].filter(Boolean);

module.exports = {
  env: {
    // allows require() and define() globals
    amd: true,
    // allows browser globals
    browser: true,
    // allows ECMAScript 2021 globals
    es2021: true,
    // allows Jest globals
    jest: true,
    // allows Node.js globals
    node: true,
    // allows Service Worker globals
    serviceworker: true,
    // allows Web Worker globals
    worker: true,
  },
  extends: getPresets(),
  parser: '@babel/eslint-parser',
  rules: {
    // forbids external modules import that are not declared in the package.json dependencies section
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['config/**/*.[jt]s', '*.config.js'] },
    ],
    // restricts file extensions that may contain JSX markup
    'react/jsx-filename-extension': ['error', { extensions: ['jsx'] }],
  },
  overrides: [
    {
      extends: getPresets(true),
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        // restricts file extensions that may contain JSX markup
        'react/jsx-filename-extension': ['error', { extensions: ['tsx'] }],
      },
    },
  ],
};
