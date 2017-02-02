import service from 'feathers-mongoose';
import Todo from './model';
import { before, after } from './hooks';

const ENDPOINT = '/todos';

// TODO: Requires get, find, create
export default function init() {
  const app = this;

  const options = {
    Model: Todo,
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
