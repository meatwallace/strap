import service from 'feathers-waterline';
import Model from './model';
import { before, after } from './hooks';
import ORM from '../configs/orm';

const ENDPOINT = '/todos';

// TODO: Requires find, remove, get, patch
export default function init() {
  const app = this;

  ORM.loadCollection(Model);

  const options = {
    Model,
    paginate: {
      default: 5,
      max: 25,
    },
  };

  app.use(ENDPOINT, service(options));

  const todoService = app.service(ENDPOINT);

  todoService.before(before);
  todoService.after(after);
}
