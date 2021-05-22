const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

module.exports = Object.entries({
  APP: './src',
  ASSETS: './src/assets',
  CACHE: './node_modules/.cache/cache-loader',
  COMPONENTS: './src/components',
  DIST: './dist',
  ENTRY: './src/index.tsx',
  ENV: './.env',
  HTML: './public/index.html',
  PAGES: './src/pages',
  PUBLIC: './public',
  STYLES: './src/styles',
}).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: path.resolve(appDirectory, value),
  }),
  {},
);
