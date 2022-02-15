const autoprefixer = require('autoprefixer');
const postCssFlexbugsFixes = require('postcss-flexbugs-fixes');

module.exports = {
  plugins: [autoprefixer, postCssFlexbugsFixes],
};
