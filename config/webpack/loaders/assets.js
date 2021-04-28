const FILE_TEMPLATE = '[name].[contenthash:5][ext]';

/**
 * Setup assets loaders
 * @return {Object} Assets loaders config
 */
module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(gif|jp(e)?g|png|webp)$/,
        type: 'asset',
        generator: {
          filename: `images/${FILE_TEMPLATE}`,
        },
      },
      {
        test: /\.svg$/,
        type: 'asset',
        generator: {
          filename: `svg/${FILE_TEMPLATE}`,
        },
      },
      {
        test: /\.(eot|ttf|woff(2)?)$/,
        type: 'asset/resource',
        generator: {
          filename: `fonts/${FILE_TEMPLATE}`,
        },
      },
    ],
  },
});
