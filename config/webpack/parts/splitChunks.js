const FILENAME_DELIMITER = '__';

/**
 * Setup split chunks
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
          // defines priority for module of preferred cache group
          priority: 1,
          // enables reusing modules that already split instead of creating new chunk
          reuseExistingChunk: true,
        },
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 2,
          // bundles vendors modules in separate chunks
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
      // maximum parallel requests number
      maxInitialRequests: Infinity,
      // minimum chunk size
      minSize: 0,
    },
  },
});
