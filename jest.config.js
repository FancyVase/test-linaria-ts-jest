module.exports = {
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  preset: 'ts-jest',
  // testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/*.test.ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // We need to use Babel in our tests since our components rely on Babel transforms for Linaria.
  globals: {
    'ts-jest': {
      babelConfig: '.babelrc',
    },
  },
};
