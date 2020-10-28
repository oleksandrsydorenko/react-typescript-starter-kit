module.exports = {
  presets: [
    [
      // allows to use the latest ECMAScript features
      '@babel/preset-env',
      {
        // disables transformation of ECMAScript import/export to CommonJS require/module.exports
        // Webpack tree shaking requires this option
        modules: false,
      },
    ],
    // allows to use TypeScript features
    '@babel/preset-typescript',
    // allows to use React features
    // must be defined after the @babel/preset-typescript
    '@babel/preset-react',
  ],
  plugins: [
    // transpiles class properties
    '@babel/proposal-class-properties',
    // transpiles object rest and spread operators
    '@babel/proposal-object-rest-spread',
    // transpiles export default
    '@babel/plugin-proposal-export-default-from',
    // transpiles export namespace
    '@babel/plugin-proposal-export-namespace-from',
    // transpiles logical assignment operators
    '@babel/plugin-proposal-logical-assignment-operators',
    // transpiles nullish coalescing operator
    '@babel/plugin-proposal-nullish-coalescing-operator',
    // transpiles optional chaining operators into a series of nil checks
    '@babel/plugin-proposal-optional-chaining',
    // speeds up non-generator transformation for async/await
    'module:fast-async',
  ],
  env: {
    development: {
      // disables omitting newlines and whitespace
      compact: false,
    },
    production: {
      plugins: [
        // optimizes application by speed up reconciliation
        '@babel/plugin-transform-react-constant-elements',
        // removes "data-test" properties from HTML elements
        'react-remove-properties',
        // removes React "propTypes"
        'transform-react-remove-prop-types',
      ],
    },
  },
};