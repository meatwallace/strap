import fs from 'fs';
import webpack from 'webpack';
import merge from 'webpack-merge';
import { resolve } from 'path';
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
    output: {
      path: resolve(__dirname, '../dist/server'),
      publicPath: '/',
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
    ],
    target: 'node',
  };

  return merge(universalConfig, serverConfig);
};
