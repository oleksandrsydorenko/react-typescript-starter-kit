const CopyPlugin = require('copy-webpack-plugin');

const { PATHS } = require('../constants');

/**
 * Setup CopyPlugin
 * @return {Object} CopyPlugin
 */

module.exports = () => ({
  plugins: [
    // copies files from provided path to a dist folder
    new CopyPlugin({
      patterns: [
        {
          from: PATHS.STATIC,
          to: PATHS.DIST,
          filter: resourcePath => !/index\.html/.test(resourcePath),
        },
      ],
    }),
  ],
});
