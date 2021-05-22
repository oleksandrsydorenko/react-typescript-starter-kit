const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

/**
 * Setup CssMinimizerPlugin
 * @return {Object} CssMinimizerPlugin
 */
module.exports = () => ({
  optimization: {
    minimizer: [
      // minifies CSS
      new CssMinimizerPlugin(),
    ],
  },
});
