const dotenv = require('dotenv');

const PATHS = require('../paths');

const ENV = dotenv.config({ path: PATHS.ENV }).parsed;

module.exports = {
  ENV,
  PATHS,
  ASSET_TEMPLATE: '[name].[contenthash:5][ext]',
  BUNDLE_TEMPLATE: '[name].[contenthash:5]',
  CHUNK_TEMPLATE: '[name].[chunkhash:5]',
  DEV_SERVER_HOST: ENV.WEBPACK_DEV_SERVER_HOST || 'localhost',
  DEV_SERVER_PORT: ENV.WEBPACK_DEV_SERVER_PORT || 3000,
  DEV_SERVER_PROTOCOL: ENV.WEBPACK_DEV_SERVER_PROTOCOL || 'http',
  INTEGRITY_HASH_ALGORITHMS: ['sha384'],
};
