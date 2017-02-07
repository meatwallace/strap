import feathers from 'feathers';
import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import socketio from 'feathers-socketio';
import middleware from './middleware';
import services from './services';

const app = feathers();

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

export default app;
