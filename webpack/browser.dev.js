import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './browser.base';
import { presets } from './constants';

const PORT = 3000;

module.exports = function config() {
  const baseConfig = base();
  const devConfig = {
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      port: PORT,
      publicPath: '/',
    },
    entry: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${PORT}`,
      'webpack/hot/only-dev-server',
      './index.js',
    ],
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets,
          plugins: [
            'react-hot-loader/babel',
          ],
        },
      }],
    },
    output: {
      filename: '[name].bundle.js',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
      }),
    ],
  };

  return merge(baseConfig, devConfig);
};
