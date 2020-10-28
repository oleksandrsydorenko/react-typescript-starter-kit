const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
  integrityHashAlgorithms: ['sha384'],
  paths: Object.entries({
    app: './src',
    assets: './src/assets',
    build: './build',
    cache: './node_modules/.cache/cache-loader',
    components: './src/components',
    entry: './src/index.tsx',
    env: './.env',
    html: './public/index.html',
    logo: './logo.png',
    public: './public',
  }).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: path.resolve(appDirectory, value),
    }),
    {},
  ),
};
