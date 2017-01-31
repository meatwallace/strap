const devSettings = require('../settings.dev');

module.exports = Object.assign({}, devSettings, {
  host: 'localhost',
  port: 3030,
});
