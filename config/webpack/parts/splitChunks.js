const FILENAME_DELIMITER = '__';

/**
 * Setup chunks splitting
 * @return {Object} Split chunks config
 */
module.exports = () => ({
  // splits chunks to runtime, commons and vendors
  optimization: {
    runtimeChunk: {
      name: ({ name }) => `runtime${FILENAME_DELIMITER}${name}`,
    },
    splitChunks: {
      automaticNameDelimiter: FILENAME_DELIMITER,
      cacheGroups: {
        default: {
          // separates async and sync chunks
          chunks: 'all',
          // generates chunk only if module shared between minimum 2 chunks
          minChunks: 2,
          priority: 1,
          // enables reusing modules that already split in chunk instead of creating the new one
          reuseExistingChunk: true,
        },
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 2,
          name: module => {
            const moduleName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1];

            // solves .NET servers issue with '@' in module name
            return `vendor${FILENAME_DELIMITER}${moduleName.replace('@', '')}`;
          },
        },
      },
      chunks: 'all',
    },
  },
});
