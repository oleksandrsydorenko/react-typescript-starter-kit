const loaderUtils = require('loader-utils');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { PATHS } = require('../constants');

const generateIdentifier =
  isMaskedIdentifiers => (context, localIdentName, localName, options) => {
    if (/module\.(css|s[ac]ss)$/g.test(context.resourcePath)) {
      const hash = loaderUtils.getHashDigest(
        path.posix.relative(context.rootContext, context.resourcePath) +
          localName,
        'md5',
        'base64',
        5,
      );

      return isMaskedIdentifiers
        ? `${localName.substring(0, 1)}_${hash}`
        : loaderUtils
            .interpolateName(
              context,
              /index\.(css|s[ac]ss)$/.test(context.resourcePath)
                ? `[folder]__${localName}__${hash}`
                : `[name]__${localName}__${hash}`,
              options,
            )
            .replace('.module', '');
    }

    return localName;
  };

/**
 * Setup CSS loaders
 * @param {Object} [props] - Properties
 * @param {string} [props.baseLoader] - Base loader
 * @param {boolean} [props.isCached] - Cache enable flag
 * @param {boolean} [props.isMaskedIdentifiers] - Masked identifiers enable flag
 * @return {Object} CSS loaders config
 */
module.exports = ({
  baseLoader = MiniCssExtractPlugin.loader,
  isCached,
  isMaskedIdentifiers = true,
} = {}) => {
  const regex = {
    sass: /\.s[ac]ss$/,
    sassModule: /\.module\.s[ac]ss$/,
  };

  const cssLoaders = [
    baseLoader,
    isCached && {
      loader: 'cache-loader',
      options: {
        cacheDirectory: PATHS.CACHE,
      },
    },
    {
      loader: 'css-loader',
      options: {
        modules: {
          getLocalIdent: generateIdentifier(isMaskedIdentifiers),
        },
      },
    },
    'postcss-loader',
  ].filter(Boolean);

  const sassLoaders = [...cssLoaders, 'sass-loader'];

  return {
    module: {
      rules: [
        {
          test: regex.sass,
          exclude: regex.sassModule,
          use: sassLoaders,
        },
        {
          test: regex.sassModule,
          use: sassLoaders,
        },
      ],
    },
  };
};
