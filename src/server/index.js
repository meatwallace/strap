import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import configuration from 'feathers-configuration';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import socketio from 'feathers-socketio';
import { join } from 'path';
import { APP_NAME } from '~/configs/app';
import middleware from './middleware';
import services from './services';
import app from './app';

// Takes a string, pumps it to the console
const log = message => (console.info(`${APP_NAME}: ${message}`));

// Configure our app so our config is accessible
app.configure(configuration(join(__dirname, '../../config/feathers')));

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? app.get('port') : 3030;
const host = isProduction ? app.get('host') : 'localhost';

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
