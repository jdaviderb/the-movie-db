module.export = {
  testURL: "http://localhost",
  coverageDirectory: "./coverage/",
  collectCoverageFrom: [
    "**/*.js",
    "!**/*.json",
    "!**webpack.config.js**",
    "!**jest.config.js**",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/coverage/**",
    "!**src/dev.js**"
  ],
  coverageThreshold: {
    global: {
      statements: 99,
      branches: 100,
      functions: 96,
      lines: 99
    }
  }
};
