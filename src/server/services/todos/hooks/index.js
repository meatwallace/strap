import { hooks as auth } from 'feathers-authentication';
// import hooks from 'feathers-hooks';
// import globalHooks from '../../../hooks';

const authed = [
  auth.verifyToken(),
  auth.populateUser(),
  auth.restrictToAuthenticated(),
];

export const before = {
  all: [],
  find: [],
  get: [],
  create: [
    ...authed,
    auth.associateCurrentUser({ as: 'authorId' }),
  ],
  update: [
    ...authed,
    auth.restrictToOwner({ ownerField: 'authorId' }),
  ],
  patch: [
    ...authed,
    auth.restrictToOwner({ ownerField: 'authorId' }),
  ],
  remove: [
    ...authed,
    auth.restrictToOwner({ ownerField: 'authorId' }),
  ],
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
