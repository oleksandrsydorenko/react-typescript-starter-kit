const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

const resolvePaths = paths =>
  Object.entries(paths).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: path.resolve(appDirectory, value),
    }),
    {},
  );

module.exports = {
  ALIASES: resolvePaths({
    '@assets': './src/assets',
    '@components': './src/components',
    '@pages': './src/pages',
    '@styles': './src/styles',
  }),
  ...resolvePaths({
    APP: './src',
    CACHE: './node_modules/.cache/cache-loader',
    DIST: './dist',
    ENTRY: './src/index.tsx',
    ENV: './.env',
    HTML: './public/index.html',
    PUBLIC: './public',
  }),
};
