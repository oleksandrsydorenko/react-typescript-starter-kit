const { DEV_SERVER_HOST, DEV_SERVER_PORT, DEV_SERVER_PROTOCOL, PATHS } = require('../constants');

/**
 * Setup development server
 * @return {Object} Development server config
 */
module.exports = () => ({
  devServer: {
    compress: true,
    historyApiFallback: true,
    host: DEV_SERVER_HOST,
    hot: true,
    https: DEV_SERVER_PROTOCOL === 'https',
    open: true,
    port: DEV_SERVER_PORT,
    static: {
      directory: PATHS.STATIC,
    },
  },
});
