import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import feathers from 'feathers';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import socketio from 'feathers-socketio';
import fetch from 'node-fetch';
import Raven from 'raven';
import middleware from './middleware';
import services from './services';

const appName = process.env.APP_NAME;
const host = process.env.HOST;
const port = process.env.PORT;

global.fetch = fetch; // Polyfill

Raven.config(process.env.SENTRY_DSN).install();

const app = feathers();

app
  .use(Raven.requestHandler())
  .use(Raven.errorHandler())
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
