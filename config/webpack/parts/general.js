const { BUNDLE_TEMPLATE, CHUNK_TEMPLATE, PATHS } = require('../constants');

/**
 * Setup general config
 * @param {Object} [props] - Properties
 * @param {string|boolean} [props.isSourceMapEnabled] - Source map type
 * @param {string} [props.stats] - Stats report type
 * @return {Object} General config
 */
module.exports = ({ isSourceMapEnabled = true, stats = 'normal' } = {}) => ({
  stats,
  entry: {
    main: PATHS.ENTRY,
  },
  devtool: isSourceMapEnabled && 'source-map',
  mode: process.env.NODE_ENV,
  output: {
    // path and filename template for chunks
    chunkFilename: `js/${CHUNK_TEMPLATE}.chunk.js`,
    // adds "crossorigin" attribute for script tags
    // required option for webpack-subresource-integrity plugin
    crossOriginLoading: 'anonymous',
    // path and filename template for bundle
    filename: `js/${BUNDLE_TEMPLATE}.js`,
    // path for compiled files
    path: PATHS.DIST,
  },
  resolve: {
    // defines aliases for modules
    alias: PATHS.ALIASES,
    extensions: ['.js', '.ts', '.tsx'],
  },
});
