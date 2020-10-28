const CompressionPlugin = require('compression-webpack-plugin');

/**
 * Setup CompressionPlugin
 * @return {Object} CompressionPlugin
 */
module.exports = () => ({
  plugins: [
    // compresses assets
    new CompressionPlugin({
      algorithm: 'brotliCompress',
      filename: '[path][base].br',
      minRatio: 0.8,
      test: /\.(js|html|css|svg|eot|ttf|woff(2)?)$/,
      threshold: 10240,
    }),
  ],
});
