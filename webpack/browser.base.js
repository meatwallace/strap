import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

module.exports = function config() {
  return {
    context: resolve(__dirname, '../src/browser'),
    module: {
      rules: [{
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'postcss-loader',
        ],
      }],
    },
    output: {
      filename: 'main.js',
      path: resolve(__dirname, '../dist/browser'),
      publicPath: '/',
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new HTMLWebpackPlugin(),
    ],
    resolve: {
      alias: {
        '~': resolve(__dirname, '../src/common'),
      },
    },
  };
};
