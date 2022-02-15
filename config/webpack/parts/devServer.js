const { DEV_SERVER_HOST, DEV_SERVER_PORT, DEV_SERVER_PROTOCOL, PATHS } = require('../constants');

/**
 * Setup development server
 * @return {Object} Development server config
 */
module.exports = () => ({
  devServer: {
    historyApiFallback: true,
    host: DEV_SERVER_HOST,
    https: DEV_SERVER_PROTOCOL === 'https',
    open: true,
    port: DEV_SERVER_PORT,
    static: {
      directory: PATHS.STATIC,
    },
  },
});
