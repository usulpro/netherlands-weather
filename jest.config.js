module.exports = {
  clearMocks: true,
  roots: ['<rootDir>/src', '<rootDir>/server'],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/*.{js}'],
  coverageDirectory: 'public/coverage',
  // testEnvironment: 'jsdom',
  testEnvironment: 'node',
  // setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '.*': 'babel-jest',
  },
};
