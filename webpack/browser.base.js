import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';
import { resolve } from 'path';
import universalBase from './universal.babel';

module.exports = function config() {
  const universalConfig = universalBase();
  const browserConfig = {
    context: resolve(__dirname, '../src/browser'),
    module: {
      rules: [{
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'postcss-loader',
        ],
      }, {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        include: /img/,
      }, {
        test: /\.woff$/,
        loader: 'url-loader?mimetype=application/font-woff',
        include: /fonts/,
      }, {
        test: /\.woff2$/,
        loader: 'url-loader?mimetype=application/font-woff2',
        include: /fonts/,
      },
      { test: /\.[ot]tf$/,
        loader: 'url-loader?mimetype=application/octet-stream',
        include: /fonts/,
      },
      { test: /\.eot$/,
        loader: 'url-loader?mimetype=application/vnd.ms-fontobject',
        include: /fonts/,
      }],
    },
    output: {
      path: resolve(__dirname, '../dist/browser'),
      publicPath: '/',
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new HTMLWebpackPlugin(),
    ],
    resolve: {
      alias: {
        fonts: resolve(__dirname, '../fonts'),
        img: resolve(__dirname, '../img'),
      },
    },
  };

  return merge(universalConfig, browserConfig);
};
