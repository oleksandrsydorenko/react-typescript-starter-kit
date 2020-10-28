const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * Setup CleanPlugin
 * @return {Object} CleanPlugin
 */
module.exports = () => ({
  plugins: [
    // cleans "output.path" directory after each successful build
    new CleanWebpackPlugin(),
  ],
});
