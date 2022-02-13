module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-typescript',
      {
        optimizeConstEnums: true,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
  env: {
    development: {
      compact: false,
    },
    production: {
      plugins: ['@babel/plugin-transform-react-constant-elements', 'react-remove-properties'],
    },
  },
};
