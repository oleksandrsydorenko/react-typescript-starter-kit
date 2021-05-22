const HtmlPlugin = require('html-webpack-plugin');

const PATHS = require('../../paths');

/**
 * Setup HtmlPlugin
 * @return {Object} HtmlPlugin
 */
module.exports = () => ({
  plugins: [
    // generates index.html and injects in it entry script
    new HtmlPlugin({
      template: PATHS.HTML,
    }),
  ],
});
