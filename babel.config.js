module.exports = {
  presets: [
    [
      // allows to use the latest ECMAScript features
      '@babel/preset-env',
      {
        // disables transformation of ECMAScript import/export to CommonJS require/module.exports
        // Webpack tree shaking requires this option
        modules: false,
        // allows to use some ECMAScript feature proposals
        shippedProposals: true,
      },
    ],
    // allows to use TypeScript features
    '@babel/preset-typescript',
    // allows to use React features
    // must be defined after the @babel/preset-typescript
    '@babel/preset-react',
  ],
  plugins: [
    // compiles export default
    '@babel/plugin-proposal-export-default-from',
    // compiles export namespace
    '@babel/plugin-proposal-export-namespace-from',
    // compiles logical assignment operators
    '@babel/plugin-proposal-logical-assignment-operators',
    // compiles nullish coalescing operator
    '@babel/plugin-proposal-nullish-coalescing-operator',
    // compiles optional chaining operators into a series of nil checks
    '@babel/plugin-proposal-optional-chaining',
    // compiles BigInt values
    '@babel/plugin-syntax-bigint',
    // enables reusing of Babel's helpers to save on code size
    '@babel/plugin-transform-runtime',
  ],
  env: {
    development: {
      // disables omitting newlines and whitespace while compiling code
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
