import 'babel-polyfill';
import fetch from 'node-fetch';
import config from './config/config';
import app from './app';

// Polyfill fetch
global.fetch = fetch;

const port = config.get('port');
const host = config.get('host');
const appName = config.get('appName');

// Start listening
app.listen(port, (err) => {
  if (err) {
    console.info(`${appName}: ${err}`);
  } else {
    console.info(`${appName}: Started server on ${host}:${port}`);
  }
});
