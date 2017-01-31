const prodSettings = require('../settings.prod');

module.exports = Object.assign({}, prodSettings, {
  host: 'strap-app.feathersjs.com',
  port: 80,
});
