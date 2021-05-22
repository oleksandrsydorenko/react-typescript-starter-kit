const PATHS = require('../../paths');

/**
 * Setup JS loaders
 * @param {Object} [props] - Properties
 * @param {boolean} [props.isCached] - Cache enabled flag
 * @param {string} [props.options] - Babel loader options
 * @return {Object} JS loaders config
 */
module.exports = ({ isCached, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(mjs|[jt]s(x)?)$/,
        exclude: /node_modules/,
        use: [
          isCached && {
            loader: 'cache-loader',
            options: {
              cacheDirectory: PATHS.CACHE,
            },
          },
          {
            options,
            loader: 'babel-loader',
          },
        ].filter(Boolean),
      },
    ],
  },
});
