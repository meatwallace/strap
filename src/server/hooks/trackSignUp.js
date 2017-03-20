import analytics from '../configs/analytics';

/* eslint-disable no-param-reassign */
export default function() {
  return (hook) => {
    const { email, facebookId, googleId, gender, firstName, lastName } = hook.result;

    analytics.track({
      userId: hook.result._id.toString(),
      event: 'Signed Up',
      traits: {
        email,
        facebookId,
        googleId,
        gender,
        firstName,
        lastName,
      }
    });

    return Promise.resolve(hook);
  }
}
