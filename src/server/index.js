import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import feathers from 'feathers';
import configuration from 'feathers-configuration';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import socketio from 'feathers-socketio';
import { join } from 'path';
import { APP_NAME } from '~/configs/app';
import middleware from './middleware';
import services from './services';

const app = feathers();

app
  .configure(configuration(join(__dirname, '../../config/feathers')))
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

const port = app.get('port');

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`${APP_NAME} started on ${app.get('host')}:${port}`);
});

export default app;
