import service from 'feathers-waterline';
import User from './model';
import { before, after } from './hooks';
import ORM from '../configs/orm';

const ENDPOINT = '/users';

export default function initService() {
  const app = this;

  ORM.loadCollection(User);

  const options = {
    Model: User,
    paginate: {
      default: 5,
      max: 25,
    },
  };

  // Initialize our service with any options it requires
  app.use(ENDPOINT, service(options));

  // Get our initialize service to that we can bind hooks
  const userService = app.service(ENDPOINT);

  // Set up our before hooks
  userService.before(before);

  // Set up our after hooks
  userService.after(after);
}
