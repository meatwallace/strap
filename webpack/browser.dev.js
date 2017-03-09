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
      proxy: {
        '/graphql': 'http://localhost:3030',
        '/graphiql': 'http://localhost:3030',
      },
    },
    entry: [
      'babel-polyfill',
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
          babelrc: false,
        },
      }],
    },
    output: {
      filename: '[name].js',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };

  return merge(baseConfig, devConfig);
};
