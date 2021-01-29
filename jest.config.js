const { defaults } = require('jest-config');

module.exports = {
  bail: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^components(.*)$": "<rootDir>/components$1",
    "^common(.*)$": "<rootDir>/common$1",
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setupJest/setupTests.js"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/mobile/",
    "/tests/e2e/",
    "/.next/",
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "ts-jest",
  },
  verbose: false,
};
