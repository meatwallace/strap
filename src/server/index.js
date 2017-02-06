import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import socketio from 'feathers-socketio';
import fetch from 'node-fetch';
import setting from '~/lib/setting';
import middleware from './middleware';
import services from './services';
import app from './app';

// Polyfill fetch
global.fetch = fetch;

// Takes a string, pumps it to the console
const log = message => (console.info(`${setting('appName')}: ${message}`));

const port = setting('port');
const host = setting('host');

app
  .use(compress())
  .options('*', cors())
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services)
  .configure(middleware);

// Start listening
app.listen(port, (err) => {
  if (err) {
    log(err);
  }

  log(`Started server on ${host}:${port}`);
});
