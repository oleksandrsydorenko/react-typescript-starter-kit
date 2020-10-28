module.exports = {
  hooks: {
    // checks commit message in accordance with https://www.conventionalcommits.org/en/v1.0.0/ specification
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    // runs lint-staged plugin
    'pre-commit': 'lint-staged && yarn test:silent',
  },
};
