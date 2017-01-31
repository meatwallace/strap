import { hooks as auth } from 'feathers-authentication';
import hooks from 'feathers-hooks';
// import globalHooks from '../../../hooks';

export const before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: [],
};

export const after = {
  all: [
    hooks.remove('password'),
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: [],
};
