module.exports = {
  // defines files to collect test coverage info from
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs,ts,tsx}'],
  // defines files extensions for handling
  // it is recommended to place the most commonly used file extensions on the left
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs'],
  // defines aliases (same as Webpack aliases)
  moduleNameMapper: {
    '^Assets(.*)$': '<rootDir>/src/assets$1',
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^~(.*)$': '<rootDir>/src$1',
  },
  // defines paths to search for test files
  roots: ['<rootDir>/src'],
};
