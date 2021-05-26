const CopyPlugin = require('copy-webpack-plugin');

const { PATHS } = require('../constants');

/**
 * Setup CopyPlugin
 * @return {Object} CopyPlugin
 */

module.exports = () => ({
  plugins: [
    // copies files
    new CopyPlugin({
      patterns: [
        {
          from: PATHS.PUBLIC,
          filter: resourcePath => !/index\.html/.test(resourcePath),
        },
      ],
    }),
  ],
});
