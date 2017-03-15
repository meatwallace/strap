import fs from 'fs';
import webpack from 'webpack';
import merge from 'webpack-merge';
import { resolve } from 'path';
import { presets } from './constants';
import universalBase from './universal.babel';

const externals = fs.readdirSync('node_modules').reduce((accum, mod) => {
  if (['.bin'].indexOf(mod) === -1) {
    return { ...accum, [mod]: `commonjs ${mod}` };
  }

  return accum;
});

module.exports = function config() {
  const universalConfig = universalBase();
  const serverConfig = {
    externals,
    context: resolve(__dirname, '../src/server'),
    entry: {
      main: [
        'babel-polyfill',
        './index.js',
      ],
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets,
          babelrc: false,
        },
      }],
    },
    output: {
      filename: '[name].js',
      path: resolve(__dirname, '../dist/api'),
      publicPath: '/',
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
    ],
    target: 'node',
  };

  return merge(universalConfig, serverConfig);
};
