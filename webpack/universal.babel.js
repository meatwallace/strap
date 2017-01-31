import { resolve } from 'path';

// Has to end in .babel.js to work with ESlint resolver
module.exports = function config() {
  return {
    module: {
      rules: [{
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      }],
    },
    resolve: {
      alias: {
        '~': resolve(__dirname, '../src/common'),
      },
    },
  };
};
