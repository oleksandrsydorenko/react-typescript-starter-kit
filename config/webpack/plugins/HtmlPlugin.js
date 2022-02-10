const HtmlPlugin = require('html-webpack-plugin');

const { PATHS } = require('../constants');

/**
 * Setup HtmlPlugin
 * @return {Object} HtmlPlugin
 */
module.exports = () => ({
  plugins: [
    // generates index.html and serves bundle into it
    new HtmlPlugin({
      template: PATHS.HTML,
    }),
  ],
});
