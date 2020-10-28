const autoprefixer = require('autoprefixer');
const glob = require('glob');
const path = require('path');
const purgeCss = require('@fullhuman/postcss-purgecss');
const postCssFlexbugsFixes = require('postcss-flexbugs-fixes');

const { paths } = require('./config/webpack/constants');

module.exports = {
  plugins: [
    autoprefixer,
    postCssFlexbugsFixes,
    process.env.NODE_ENV === 'production' &&
      purgeCss({
        content: [
          paths.html,
          ...glob.sync(path.join(paths.app, '**/*.{jsx,tsx}'), { nodir: true }),
        ],
      }),
  ].filter(Boolean),
};
