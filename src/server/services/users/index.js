import service from 'feathers-mongoose';
import User from './model';
import { before, after } from './hooks';

const ENDPOINT = '/users';

// TODO: Requires get, find, create
export default function init() {
  const app = this;

  const options = {
    Model: User,
    paginate: {
      default: 5,
      max: 25,
    },
  };

  app.use(ENDPOINT, service(options));

  const userService = app.service(ENDPOINT);

  userService.before(before);
  userService.after(after);
}
