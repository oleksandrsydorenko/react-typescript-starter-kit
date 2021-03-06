const opn = require('better-opn');

const {
  DEV_SERVER_HOST,
  DEV_SERVER_PORT,
  DEV_SERVER_PROTOCOL,
  PATHS,
} = require('../constants');

/**
 * Setup development server
 * @return {Object} Development server config
 */
module.exports = () => ({
  devServer: {
    after: () =>
      opn(`${DEV_SERVER_PROTOCOL}://${DEV_SERVER_HOST}:${DEV_SERVER_PORT}`),
    compress: true,
    contentBase: PATHS.PUBLIC,
    historyApiFallback: true,
    host: DEV_SERVER_HOST,
    hot: true,
    https: DEV_SERVER_PROTOCOL === 'https',
    overlay: {
      errors: true,
      warnings: false,
    },
    port: DEV_SERVER_PORT,
    stats: 'errors-only',
    watchContentBase: true,
  },
});
