const PATHS = require('./config/paths');

module.exports = {
  // defines files to collect test coverage info from
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs,ts,tsx}'],
  // defines files extensions for handling
  // it is recommended to place the most commonly used file extensions on the left
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs'],
  // defines aliases
  moduleNameMapper: Object.entries(PATHS.ALIASES).reduce(
    (acc, [alias, path]) => ({
      ...acc,
      [`^${alias}(.*)$`]: `${path}$1`,
    }),
    {},
  ),
  // defines paths to search for test files
  roots: ['<rootDir>/src'],
};
