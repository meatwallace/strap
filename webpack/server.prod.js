import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './server.base';

module.exports = function config() {
  const baseConfig = base();
  const devConfig = {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
    ],
  };

  return merge(baseConfig, devConfig);
};
