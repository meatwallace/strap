import { hooks as authHooks } from 'feathers-authentication';
import { remove } from 'feathers-hooks';

const { authenticate } = authHooks;

export const before = {
  all: [
    authenticate('jwt'),
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
    remove('password'),
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: [],
};
