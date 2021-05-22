const autoprefixer = require('autoprefixer');
const glob = require('glob');
const path = require('path');
const purgeCss = require('@fullhuman/postcss-purgecss');
const postCssFlexbugsFixes = require('postcss-flexbugs-fixes');

const PATHS = require('./config/paths');

module.exports = {
  plugins: [
    autoprefixer,
    postCssFlexbugsFixes,
    process.env.NODE_ENV === 'production' &&
      purgeCss({
        content: [
          PATHS.HTML,
          ...glob.sync(path.join(PATHS.APP, '**/*.{jsx,tsx}'), { nodir: true }),
        ],
      }),
  ].filter(Boolean),
};
