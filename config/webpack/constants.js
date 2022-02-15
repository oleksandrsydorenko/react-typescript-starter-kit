require('dotenv').config();

const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolvePaths = paths =>
  Object.entries(paths).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: path.resolve(appDirectory, value),
    }),
    {},
  );

module.exports = {
  PATHS: {
    ALIASES: resolvePaths({
      '@assets': './src/assets',
      '@components': './src/components',
      '@pages': './src/pages',
      '@styles': './src/styles',
    }),
    ...resolvePaths({
      APP: './src',
      CACHE: './node_modules/.cache/cache-loader',
      DIST: './dist',
      ENTRY: './src/index.tsx',
      HTML: './static/index.html',
      STATIC: './static',
    }),
  },
  ASSET_FILENAME_TEMPLATE: '[name].[contenthash:5][ext]',
  BUNDLE_FILENAME_TEMPLATE: '[name].[contenthash:5]',
  CHUNK_FILENAME_TEMPLATE: '[name].[contenthash:5]',
  DEV_SERVER_HOST: process.env.WEBPACK_DEV_SERVER_HOST || 'localhost',
  DEV_SERVER_PORT: process.env.WEBPACK_DEV_SERVER_PORT || 3000,
  DEV_SERVER_PROTOCOL: process.env.WEBPACK_DEV_SERVER_PROTOCOL || 'http',
  INTEGRITY_HASH_ALGORITHMS: ['sha384'],
};
