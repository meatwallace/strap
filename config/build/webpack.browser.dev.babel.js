import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

const PORT = 3000;
const PATH = '/';

module.exports = function config() {
  return {
    context: resolve(__dirname, '../../src/browser'),
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      port: PORT,
      publicPath: PATH,
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
    output: {
      filename: 'main.js',
      path: resolve(__dirname, '../../dist/browser'),
      publicPath: PATH,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HTMLWebpackPlugin(),
    ],
    resolve: {
      alias: {
        '~': resolve(__dirname, '../../src/common'),
      },
    },
  };
};
