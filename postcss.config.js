const autoprefixer = require('autoprefixer');
const glob = require('glob');
const path = require('path');
const purgeCss = require('@fullhuman/postcss-purgecss');
const postCssFlexbugsFixes = require('postcss-flexbugs-fixes');

module.exports = {
  plugins: [
    autoprefixer,
    postCssFlexbugsFixes,
    process.env.NODE_ENV === 'production' &&
      purgeCss({
        content: [
          './static/index.html',
          ...glob.sync(path.join('./src', '**/*.ts{,x}'), { nodir: true }),
        ],
      }),
  ].filter(Boolean),
};
