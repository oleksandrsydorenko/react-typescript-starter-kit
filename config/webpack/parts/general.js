const { BUNDLE_FILENAME_TEMPLATE, CHUNK_FILENAME_TEMPLATE, PATHS } = require('../constants');

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
    chunkFilename: `js/${CHUNK_FILENAME_TEMPLATE}.chunk.js`,
    clean: true,
    // adds "crossorigin" attribute for script tags
    // required option for webpack-subresource-integrity plugin
    crossOriginLoading: 'anonymous',
    filename: `js/${BUNDLE_FILENAME_TEMPLATE}.js`,
    path: PATHS.DIST,
  },
  resolve: {
    alias: PATHS.ALIASES,
    extensions: ['.js', '.ts', '.tsx'],
  },
});
