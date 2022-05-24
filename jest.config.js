module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: [
    'dotenv/config',
    '<rootDir>/__tests__/setupTests.ts',
    '<rootDir>/__tests__/setEnvVars.ts',
  ],
  testRegex: '^.+\\.test\\.ts?$',
  testPathIgnorePatterns: ['/node_modules/'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['/node_modules/'],
};
