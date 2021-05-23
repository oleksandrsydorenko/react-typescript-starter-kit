const { ASSET_TEMPLATE } = require('../constants');

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
          filename: `images/${ASSET_TEMPLATE}`,
        },
      },
      {
        test: /\.svg$/,
        type: 'asset',
        generator: {
          filename: `svg/${ASSET_TEMPLATE}`,
        },
      },
      {
        test: /\.(eot|ttf|woff(2)?)$/,
        type: 'asset/resource',
        generator: {
          filename: `fonts/${ASSET_TEMPLATE}`,
        },
      },
    ],
  },
});
