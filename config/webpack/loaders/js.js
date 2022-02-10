const { PATHS } = require('../constants');

/**
 * Setup JS loaders
 * @param {Object} [props] - Properties
 * @param {boolean} [props.isCached] - Cache enable flag
 * @param {string} [props.options] - Options
 * @return {Object} JS loaders config
 */
module.exports = ({ isCached, options = {} } = {}) => ({
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        use: [
          isCached && {
            loader: 'cache-loader',
            options: {
              cacheDirectory: PATHS.CACHE,
            },
          },
          {
            options: {
              cacheCompression: false,
              cacheDirectory: options.cacheDirectory,
            },
            loader: 'babel-loader',
          },
        ].filter(Boolean),
      },
    ],
  },
});
