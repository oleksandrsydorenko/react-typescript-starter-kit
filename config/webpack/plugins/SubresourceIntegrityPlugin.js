const SubresourceIntegrityPlugin = require('webpack-subresource-integrity');

const { INTEGRITY_HASH_ALGORITHMS } = require('../constants');

/**
 * Setup SubresourceIntegrityPlugin
 * @return {Object} SubresourceIntegrityPlugin
 */
module.exports = () => ({
  plugins: [
    // adds SRI security feature to requested scripts and links
    // plugin can interfere with hot reloading and should be disabled when using tools such as webpack-dev-server
    // to use SRI and HTTP together should be set the "Cache-Control: no-transform" response header
    new SubresourceIntegrityPlugin({
      hashFuncNames: INTEGRITY_HASH_ALGORITHMS,
    }),
  ],
});
