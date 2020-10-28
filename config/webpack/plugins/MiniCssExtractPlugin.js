const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Setup MiniCssExtractPlugin
 * @return {Object} MiniCssExtractPlugin
 */
module.exports = () => ({
  plugins: [
    // extracts CSS to separate files
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[chunkhash:5].css',
    }),
  ],
});
