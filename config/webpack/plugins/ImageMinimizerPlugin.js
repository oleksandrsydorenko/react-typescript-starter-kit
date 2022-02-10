const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

/**
 * Setup ImageMinimizerPlugin
 * @return {Object} ImageMinimizerPlugin
 */
module.exports = () => ({
  optimization: {
    minimizer: [
      // optimizes image files
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // lossless optimization plugins
            // read here https://github.com/webpack-contrib/image-minimizer-webpack-plugin
            plugins: ['jpegtran', 'optipng', 'svgo'],
          },
        },
      }),
    ],
  },
});
