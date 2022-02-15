const { merge } = require('webpack-merge');

const loaders = require('./loaders');
const parts = require('./parts');
const plugins = require('./plugins');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

const defaultConfig = merge(
  loaders.assets(),
  plugins.DefinePlugin({
    isDevelopment,
    isProduction,
  }),
  plugins.ForkTsCheckerPlugin(),
);

const getDevelopmentConfig = () =>
  merge(
    loaders.css({
      baseLoader: 'style-loader',
      isCached: true,
      isMaskedIdentifiers: false,
    }),
    loaders.js({
      isCached: true,
      options: {
        cacheDirectory: true,
      },
    }),
    parts.devServer(),
    parts.general({
      isSourceMapEnabled: true,
    }),
    plugins.HtmlPlugin(),
  );

const getProductionConfig = () =>
  merge(
    loaders.css(),
    loaders.js(),
    parts.general({
      isSourceMapEnabled: process.env.WEBPACK_SOURCE_MAPS_ENABLED === 'true',
      stats: process.env.WEBPACK_STATS,
    }),
    parts.splitChunks(),
    plugins.AssetsManifestPlugin(),
    plugins.CompressionPlugin(),
    plugins.CopyPlugin(),
    plugins.CssMinimizerPlugin(),
    plugins.HtmlPlugin(),
    plugins.ImageMinimizerPlugin(),
    plugins.MiniCssExtractPlugin(),
    plugins.SubresourceIntegrityPlugin(),
    plugins.TerserPlugin(),
  );

module.exports = () =>
  merge(defaultConfig, (isProduction ? getProductionConfig : getDevelopmentConfig)());
