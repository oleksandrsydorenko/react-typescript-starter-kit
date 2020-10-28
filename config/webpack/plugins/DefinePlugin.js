const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');

const { paths } = require('../constants');

/**
 * Setup DefinePlugin
 * @return {Object} DefinePlugin
 */
module.exports = () => ({
  plugins: [
    // defines global variables
    new DefinePlugin({
      'process.env': dotenv.config({ path: paths.env }).parsed,
    }),
  ],
});
