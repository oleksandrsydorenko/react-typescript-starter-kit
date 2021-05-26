const { merge } = require('webpack-merge');

const loaders = require('./loaders');
const parts = require('./parts');
const plugins = require('./plugins');

const { NODE_ENV, WEBPACK_SOURCE_MAPS_ENABLED, WEBPACK_STATS_PRESET } =
  process.env;
const isProduction = NODE_ENV === 'production';

const defaultConfig = merge(
  loaders.assets(),
  plugins.DefinePlugin({
    isProduction,
    isDevelopment: !isProduction,
  }),
  plugins.ForkTsCheckerPlugin(),
);

const getDevelopmentConfig = () =>
  merge(
    loaders.css({
      baseLoader: 'style-loader',
      isCached: true,
      // generates non masked identifiers
      isMasked: false,
    }),
    loaders.js({
      isCached: true,
      options: {
        // enables babel-loader caching (cache directory: ./node_modules/.cache/babel-loader)
        cacheDirectory: true,
        cacheCompression: false,
      },
    }),
    parts.devServer(),
    parts.general({
      mode: 'development',
      sourceMapsType: 'inline-source-map',
    }),
    plugins.HtmlPlugin(),
  );

const getProductionConfig = () =>
  merge(
    loaders.css(),
    loaders.js(),
    parts.general({
      sourceMapsType: WEBPACK_SOURCE_MAPS_ENABLED === 'true' && 'source-map',
      stats: WEBPACK_STATS_PRESET,
    }),
    parts.splitChunks(),
    plugins.AssetsManifestPlugin(),
    plugins.CleanPlugin(),
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
  merge(
    defaultConfig,
    (isProduction ? getProductionConfig : getDevelopmentConfig)(),
  );
