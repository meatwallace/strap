module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          // Loads our style object as global custom variables
          variables: require('./src/common/styles/variables.js'),
        },
      },
    }),
    require('postcss-modular-scale'),
  ],
};
