import { remove } from 'feathers-hooks-common';
import { hooks as authHooks } from 'feathers-authentication';
import { hooks as localHooks } from 'feathers-authentication-local';
import { hooks as permHooks } from 'feathers-permissions';
import { mergeGoogleProfile } from '../../../hooks';

const { authenticate } = authHooks;
const { hashPassword } = localHooks;
const { checkPermissions, setPermissions, isPermitted } = permHooks;

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
    mergeGoogleProfile(),
  ],
  update: [
    authenticate('jwt'),
    checkPermissions({ service: 'users' }),
    checkPermissions({ roles: ['admin'] }),
    isPermitted(),
    mergeGoogleProfile(),
  ],
  patch: [
    authenticate('jwt'),
    checkPermissions({ service: 'users' }),
    checkPermissions({ roles: ['admin'] }),
    isPermitted(),
    mergeGoogleProfile(),
  ],
  remove: [
    authenticate('jwt'),
    checkPermissions({ service: 'users' }),
    checkPermissions({ roles: ['admin'] }),
    isPermitted(),
  ],
};

export const after = {
  all: [
    remove('password'),
  ],
  find: [],
  get: [],
  create: [
    setPermissions({ permissions: ['users:*:id'] }),
    setPermissions({ permissions: ['user'], field: 'roles' }),
  ],
  update: [],
  patch: [],
  remove: [],
};
