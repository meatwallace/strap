module.exports = function init(wallaby) {
  process.env.NODE_ENV = 'test';

  return {
    name: 'strap',
    files: [
      '**/src/**/*.js',
      '!**/src/**/__tests__/*.js',
      '!node_modules/**/*',
    ],
    tests: [
      '**/src/**/__tests__/*.js',
      '!node_modules/**/*',
    ],
    env: {
      type: 'node',
      runner: 'node',
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
    setup: (wall) => {
      wall.testFramework.configure({
        moduleNameMapper: {
          '^.+\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/config/jest/fileTransform.js',
          '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
        },
      });
    },
    testFramework: 'jest',
  };
};
