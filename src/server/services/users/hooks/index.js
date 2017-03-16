import { remove } from 'feathers-hooks-common';
import { hooks as authHooks } from 'feathers-authentication';
import { hooks as localHooks } from 'feathers-authentication-local';
import { hooks as permHooks } from 'feathers-permissions';
import { initializeUser, mergeGoogleProfile } from '../../../hooks';

const { authenticate } = authHooks;
const { hashPassword } = localHooks;
const { checkPermissions, isPermitted } = permHooks;

export const before = {
  all: [],
  find: [
    authenticate('jwt'),
  ],
  get: [
    authenticate('jwt'),
  ],
  create: [
    hashPassword(),
    initializeUser(),
    mergeGoogleProfile(),
  ],
  update: [
    authenticate('jwt'),
    checkPermissions({ service: 'users' }),
    isPermitted(),
    mergeGoogleProfile(),
  ],
  patch: [
    authenticate('jwt'),
    checkPermissions({ service: 'users' }),
    isPermitted(),
    mergeGoogleProfile(),
  ],
  remove: [
    authenticate('jwt'),
    checkPermissions({ service: 'users' }),
    isPermitted(),
  ],
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
