import { get, merge } from 'lodash';

/* eslint-disable no-param-reassign */
export default function() {
  return (hook) => {
    const provider = get(hook, 'params.oauth.provider');

    // TODO: Work out account merging strategy
    if (provider === 'google-token') {
      hook.data.google = merge(hook.data.google, hook.data['google-token']);
    }

    if (hook.data.google) {
      const {
        gender,
        name: { familyName, givenName },
        // emails: [{ value: email }],
      } = hook.data.google.profile;

      hook.data.gender = hook.data.gender || gender;
      hook.data.firstName = hook.data.firstName || givenName;
      hook.data.lastName = hook.data.lastName || familyName;
      // hook.data.email = hook.data.email || email;
    }

    return Promise.resolve(hook);
  }
}
