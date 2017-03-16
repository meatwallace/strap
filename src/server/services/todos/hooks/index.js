import { hooks as authHooks } from 'feathers-authentication';

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
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: [],
};
