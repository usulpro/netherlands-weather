module.exports = {
  clearMocks: true,
  roots: ['<rootDir>/src', '<rootDir>/server'],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/*.{js}'],
  coverageDirectory: 'public/coverage',
  testEnvironment: 'node',
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  snapshotSerializers: ['jest-emotion'],
};
