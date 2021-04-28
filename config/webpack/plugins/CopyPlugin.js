const CopyPlugin = require('copy-webpack-plugin');

const { paths } = require('../constants');

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
          from: paths.public,
          filter: resourcePath => !/index\.html/.test(resourcePath),
        },
      ],
    }),
  ],
});
