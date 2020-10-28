const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');

/**
 * Setup ForkTsCheckerPlugin
 * @return {Object} ForkTsCheckerPlugin
 */
module.exports = () => ({
  plugins: [
    // runs TypeScript type checker on a separate process
    new ForkTsCheckerPlugin(),
  ],
});
