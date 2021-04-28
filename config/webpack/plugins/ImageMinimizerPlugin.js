const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

/**
 * Setup ImageMinimizerPlugin
 * @return {Object} ImageMinimizerPlugin
 */
module.exports = () => ({
  plugins: [
    // optimizes all images types
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // lossless optimization plugins
        plugins: ['gifsicle', 'jpegtran', 'optipng', 'svgo'],
      },
    }),
  ],
});
