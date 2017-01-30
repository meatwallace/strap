const cssImport = require('postcss-import');
const cssNext = require('postcss-cssnext');
const modularScale = require('postcss-modular-scale');

module.exports = {
  plugins: [
    cssImport,
    cssNext,
    modularScale,
  ],
};
