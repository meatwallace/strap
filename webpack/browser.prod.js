import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './browser.base';
import { presets } from './constants';

module.exports = function config() {
  const baseConfig = base();
  const prodConfig = {
    devtool: 'cheap-module-source-map',
    entry: {
      main: './index.js',
    },
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
      filename: '[name].[chunkhash].js',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.UglifyJsPlugin(),
    ],
  };

  return merge(baseConfig, prodConfig);
};
