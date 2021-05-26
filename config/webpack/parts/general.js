const { BUNDLE_TEMPLATE, CHUNK_TEMPLATE, PATHS } = require('../constants');

/**
 * Setup general options
 * @param {Object} [props] - Properties
 * @param {string} [props.mode] - Configuration mode
 * @param {string|boolean} [props.sourceMapsType] - Source maps type
 * @param {string} [props.stats] - Stats report type
 * @return {Object} General options config
 */
module.exports = ({
  mode = 'production',
  sourceMapsType = false,
  stats = 'normal',
} = {}) => ({
  mode,
  stats,
  entry: {
    main: PATHS.ENTRY,
  },
  devtool: sourceMapsType,
  output: {
    // generates chunk to provided path
    chunkFilename: `js/${CHUNK_TEMPLATE}.chunk.js`,
    // adds "crossorigin" attribute for script tags
    // required option for webpack-subresource-integrity plugin
    crossOriginLoading: 'anonymous',
    // generates bundle to provided path
    filename: `js/${BUNDLE_TEMPLATE}.js`,
    // defines the path for compiled files
    // required option for clean-webpack-plugin
    path: PATHS.DIST,
  },
  resolve: {
    // defines aliases for modules
    alias: PATHS.ALIASES,
    extensions: ['.js', 'jsx', '.mjs', '.ts', '.tsx'],
  },
});
