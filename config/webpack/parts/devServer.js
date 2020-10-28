const opn = require('better-opn');

const { paths } = require('../constants');

const DEV_SERVER_HOST = 'localhost';
const DEV_SERVER_PORT = 3000;
const DEV_SERVER_PROTOCOL = 'http';

/**
 * Setup development server
 * @return {Object} Development server config
 */
module.exports = () => ({
  devServer: {
    after: () => opn(`${DEV_SERVER_PROTOCOL}://${DEV_SERVER_HOST}:${DEV_SERVER_PORT}`),
    compress: true,
    contentBase: paths.public,
    historyApiFallback: true,
    host: DEV_SERVER_HOST,
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
