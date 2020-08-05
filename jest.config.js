const path = require("path");

module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "css", "scss", "tsx", "js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^components(.*)$": "<rootDir>/components$1",
    "^common(.*)$": "<rootDir>/common$1"
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setupJest/setupTests.js"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/mobile/",
    "/tests/e2e/",
    "/.next/"
  ]
};
