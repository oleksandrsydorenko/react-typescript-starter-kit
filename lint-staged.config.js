module.exports = {
  // runs eslint against JavaScript and TypeScript files
  '*.{j,t}s{,x}': ['eslint --fix'],
  // runs prettier against HTML, JSON, Markdown and YAML files
  '*.{html,json,md,yaml}': ['prettier -w'],
  // runs stylelint against CSS, SASS and SCSS files
  '*.{c,sa,sc}ss': ['stylelint --fix'],
};
