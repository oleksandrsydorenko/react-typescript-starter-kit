// eslint-disable-next-line import/no-extraneous-dependencies
const TerserPlugin = require('terser-webpack-plugin');

/**
 * Setup TerserPlugin
 * @return {Object} TerserPlugin
 */
module.exports = () => ({
  optimization: {
    minimizer: [
      // minifies JS
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
});
