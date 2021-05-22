const { paths } = require('../constants');

const { NODE_ENV, SOURCE_MAPS_ENABLED } = process.env;

/**
 * Setup general options
 * @param {Object} [props] - Properties
 * @param {string} [props.sourceMapsType] - Source maps type
 * @param {string} [props.stats] - Stats report type
 * @return {Object} General options config
 */
module.exports = ({ sourceMapsType, stats } = {}) => ({
  stats,
  entry: {
    main: paths.entry,
  },
  devtool:
    SOURCE_MAPS_ENABLED === 'true' ? 'source-map' : sourceMapsType || false,
  mode: NODE_ENV,
  output: {
    // generates chunk with file names by template
    chunkFilename: 'js/[name].[chunkhash:5].chunk.js',
    // configures the "crossorigin" attribute for script tags
    // required option for webpack-subresource-integrity plugin
    crossOriginLoading: 'anonymous',
    // generates bundle with file name by template
    filename: 'js/[name].[contenthash:5].js',
    path: paths.dist,
  },
  resolve: {
    // defines aliases to import/require modules
    // it is important to sync aliases with jest.config.js
    alias: {
      '@assets': paths.assets,
      '@components': paths.components,
      '@pages': paths.pages,
      '@styles': paths.styles,
    },
    extensions: ['.js', 'jsx', '.mjs', '.ts', '.tsx'],
  },
  target: 'web',
});
