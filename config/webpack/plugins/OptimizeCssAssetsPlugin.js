const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

/**
 * Setup OptimizeCssAssetsPlugin
 * @return {Object} OptimizeCssAssetsPlugin
 */
module.exports = () => ({
  plugins: [
    // minifies CSS
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
        discardEmpty: true,
        discardDuplicates: true,
        discardOverridden: true,
        // runs default cssnano minifier in safe mode to avoid potentially unsafe transformations
        safe: true,
        uniqueSelectors: true,
        ...(process.env.SOURCE_MAPS_ENABLED === 'true' && {
          map: {
            // forces the source maps to be output into separate files
            inline: false,
            // appends the sourceMappingURL to the end of the css files
            // helps browsers to find source maps
            annotation: true,
          },
        }),
      },
    }),
  ],
});
