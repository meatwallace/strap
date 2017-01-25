const cssImport = require('postcss-import');
const cssNext = require('postcss-cssnext');

module.exports = {
  plugins: [
    cssImport,
    cssNext,
  ],
};
