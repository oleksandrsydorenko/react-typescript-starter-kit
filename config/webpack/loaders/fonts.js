/**
 * Setup fonts loaders
 * @return {Object} Fonts loaders config
 */
module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff(2)?)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash:5].[ext]',
            outputPath: '/fonts',
          },
        },
      },
    ],
  },
});
