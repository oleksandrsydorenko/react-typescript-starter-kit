const PATHS = require('../../paths');
const { BUNDLE_TEMPLATE, CHUNK_TEMPLATE } = require('../constants');

const { NODE_ENV, SOURCE_MAPS_ENABLED } = process.env;

/**
 * Setup general options
 * @param {Object} [props] - Properties
 * @param {string|boolean} [props.sourceMapsType] - Source maps type
 * @param {string} [props.stats] - Stats report type
 * @return {Object} General options config
 */
module.exports = ({ sourceMapsType = false, stats } = {}) => ({
  stats,
  entry: {
    main: PATHS.ENTRY,
  },
  devtool: SOURCE_MAPS_ENABLED === 'true' ? 'source-map' : sourceMapsType,
  mode: NODE_ENV,
  output: {
    // generates chunk
    chunkFilename: `js/${CHUNK_TEMPLATE}.chunk.js`,
    // configures the "crossorigin" attribute for script tags
    // required option for webpack-subresource-integrity plugin
    crossOriginLoading: 'anonymous',
    // generates bundle
    filename: `js/${BUNDLE_TEMPLATE}.js`,
    path: PATHS.DIST,
  },
  resolve: {
    // defines aliases to import/require modules
    alias: PATHS.ALIASES,
    extensions: ['.js', 'jsx', '.mjs', '.ts', '.tsx'],
  },
  target: 'web',
});
