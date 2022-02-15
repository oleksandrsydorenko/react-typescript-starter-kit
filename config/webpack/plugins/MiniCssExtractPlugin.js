const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { CHUNK_FILENAME_TEMPLATE } = require('../constants');

/**
 * Setup MiniCssExtractPlugin
 * @return {Object} MiniCssExtractPlugin
 */
module.exports = () => ({
  plugins: [
    // extracts CSS to separate files
    new MiniCssExtractPlugin({
      filename: `styles/${CHUNK_FILENAME_TEMPLATE}.css`,
    }),
  ],
});
