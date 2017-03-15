import merge from 'webpack-merge';
import base from './server.base';

module.exports = function config() {
  const baseConfig = base();
  const devConfig = {};

  return merge(baseConfig, devConfig);
};
