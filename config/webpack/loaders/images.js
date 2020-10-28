const FILE_TEMPLATE = '[name].[contenthash:5].[ext]';
const URL_SIZE_LIMIT = 8 * 1024;

/**
 * Setup images loaders
 * @param {boolean} [isOptimized] - Optimization enabled flag
 * @return {Object} Images loaders config
 */
module.exports = (isOptimized = true) => ({
  module: {
    rules: [
      {
        test: /\.(gif|jp(e)?g|png|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: URL_SIZE_LIMIT,
              name: FILE_TEMPLATE,
              outputPath: 'images',
            },
          },
          isOptimized && 'image-webpack-loader',
        ].filter(Boolean),
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          {
            loader: 'svg-url-loader',
            options: {
              limit: URL_SIZE_LIMIT,
              name: FILE_TEMPLATE,
              outputPath: 'svg',
            },
          },
          isOptimized && 'svgo-loader',
        ].filter(Boolean),
      },
    ],
  },
});
