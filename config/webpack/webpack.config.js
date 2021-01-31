const { merge } = require('webpack-merge');

const loaders = require('./loaders');
const parts = require('./parts');
const plugins = require('./plugins');

const { NODE_ENV, STATS_PRESET } = process.env;
const defaultConfig = merge(
  loaders.fonts(),
  plugins.DefinePlugin(),
  plugins.ForkTsCheckerPlugin(),
);

const getDevelopmentConfig = () =>
  merge(
    loaders.css({
      // defines base loader
      baseLoader: 'style-loader',
      // enables caching
      isCached: true,
      // generates non masked identifiers
      isMasked: false,
    }),
    loaders.images(false),
    loaders.js({
      // enables caching
      isCached: true,
      // defines babel-loader options
      options: {
        // enables babel-loader caching (cache directory: ./node_modules/.cache/babel-loader)
        cacheDirectory: true,
        // disables cache compression that reduces transpilation time
        cacheCompression: false,
      },
    }),
    parts.devServer(),
    parts.general({
      // defines source maps type
      sourceMapsType: 'eval-cheap-module-source-map',
      // defines stats report type
      stats: STATS_PRESET || 'errors-warnings',
    }),
    plugins.HtmlPlugin(),
  );

const getProductionConfig = () =>
  merge(
    loaders.css(),
    loaders.images(),
    loaders.js(),
    parts.general(),
    parts.splitChunks(),
    plugins.AssetsManifestPlugin(),
    plugins.CleanPlugin(),
    plugins.CompressionPlugin(),
    plugins.CopyPlugin(),
    plugins.HtmlPlugin(),
    plugins.MiniCssExtractPlugin(),
    plugins.OptimizeCssAssetsPlugin(),
    plugins.SubresourceIntegrityPlugin(),
  );

module.exports = () =>
  merge(
    defaultConfig,
    (NODE_ENV === 'production' ? getProductionConfig : getDevelopmentConfig)(),
  );
