import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './server.base';
import { presets } from './constants';

module.exports = function config() {
  const baseConfig = base();
  const devConfig = {
    entry: [
      './index.js',
    ],
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets,
        },
      }],
    },
    output: {
      filename: '[name].dev.bundle.js',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
      }),
    ],
  };

  return merge(baseConfig, devConfig);
};
