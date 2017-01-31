import service from 'feathers-mongoose';
import user from './model';
import { before, after } from './hooks';

export default function initService() {
  const app = this;

  const options = {
    Model: user,
    paginate: {
      default: 5,
      max: 25,
    },
  };

  // Initialize our service with any options it requires
  app.use('/users', service(options));

  // Get our initialize service to that we can bind hooks
  const userService = app.service('/users');

  // Set up our before hooks
  userService.before(before);

  // Set up our after hooks
  userService.after(after);
}
