const { DefinePlugin } = require('webpack');

/**
 * Setup DefinePlugin
 * @param {Object} [config] - Environment variables config
 * @return {Object} DefinePlugin
 */
module.exports = (config = {}) => ({
  plugins: [
    // defines global variables
    new DefinePlugin({
      __appConfig: {
        ...config,
        version: JSON.stringify(process.env.npm_package_version),
      },
    }),
  ],
});
