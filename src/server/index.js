import 'babel-polyfill';
import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import socketio from 'feathers-socketio';
import fetch from 'node-fetch';
import middleware from './middleware';
import services from './services';
import app from './app';

const appName = app.get('appName');
const port = app.get('port');
const host = app.get('host');

// Polyfill fetch
global.fetch = fetch;

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
app.listen(port, host, err => {
  if (err) {
    console.info(`${appName}: ${err}`);
  } else {
    console.info(`${appName}: Started server on ${host}:${port}`);
  }
});
