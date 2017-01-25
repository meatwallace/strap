module.exports = function init(wallaby) {
  process.env.NODE_ENV = 'test';

  return {
    name: 'strap',
    files: [
      'package.json',
      'src/**/*.js',
      '!src/**/__tests__/*.js',
    ],
    tests: [
      'src/**/__tests__/*.js',
    ],
    env: {
      type: 'node',
      runner: 'node',
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
    setup: (wall) => {
      // eslint-disable-next-line global-require
      const config = require('./package.json').jest;

      wall.testFramework.configure(config);
    },
    testFramework: 'jest',
  };
};
