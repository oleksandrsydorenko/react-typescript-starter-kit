const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');

const { paths } = require('../constants');

const { NODE_ENV } = process.env;

/**
 * Setup DefinePlugin
 * @return {Object} DefinePlugin
 */
module.exports = () => ({
  plugins: [
    // defines global variables
    new DefinePlugin({
      __appConfig: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          ...dotenv.config({ path: paths.env }).parsed,
        },
        isDevelopment: NODE_ENV === 'development',
        isProduction: NODE_ENV === 'production',
        version: JSON.stringify(process.env.npm_package_version),
      },
    }),
  ],
});
