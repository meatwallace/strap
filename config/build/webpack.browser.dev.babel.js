import path from 'path';

module.exports = function config() {
  return {
    context: path.resolve(__dirname, '../../src/browser'),
    entry: './index.js',
    output: {
      filename: '[chunkhash].[name].js',
      path: './dist/browser',
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, '../../src/common'),
      },
    },
  };
};
