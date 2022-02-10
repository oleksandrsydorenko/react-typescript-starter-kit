module.exports = {
  '*.ts{,x}': ['eslint --fix'],
  '*.{html,json,md,yaml}': ['prettier -w'],
  '*.{sa,sc}ss': ['stylelint --fix'],
};
