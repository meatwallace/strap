import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

module.exports = function config() {
  return {
    context: resolve(__dirname, '../../src/browser'),
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './index.js',
    ],
    output: {
      filename: 'main.js',
      path: resolve(__dirname, '../../dist/browser'),
      publicPath: '/',
    },
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      port: 3000,
      publicPath: '/',
    },
    resolve: {
      alias: {
        '~': resolve(__dirname, '../../src/common'),
      },
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['es2015', { modules: false }],
            'es2016',
            'es2017',
            'stage-0',
            'react',
          ],
          plugins: [
            'react-hot-loader/babel',
          ],
        },
      }, {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'postcss-loader',
        ],
      }],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HTMLWebpackPlugin(),
    ],
  };
};
