const TerserPlugin = require('terser-webpack-plugin');

/**
 * Setup TerserPlugin
 * @return {Object} TerserPlugin
 */
module.exports = () => ({
  optimization: {
    minimizer: [
      // minifies JS files
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
});
