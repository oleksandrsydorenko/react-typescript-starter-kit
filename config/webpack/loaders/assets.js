const { ASSET_FILENAME_TEMPLATE } = require('../constants');

/**
 * Setup asset loaders
 * @return {Object} Asset loaders config
 */
module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(jp(e)?g|png|webp)$/,
        type: 'asset',
        generator: {
          filename: `images/${ASSET_FILENAME_TEMPLATE}`,
        },
      },
      {
        test: /\.svg$/,
        type: 'asset',
        generator: {
          filename: `svg/${ASSET_FILENAME_TEMPLATE}`,
        },
      },
      {
        test: /\.(eot|ttf|woff(2)?)$/,
        type: 'asset/resource',
        generator: {
          filename: `fonts/${ASSET_FILENAME_TEMPLATE}`,
        },
      },
    ],
  },
});
