/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests/'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};