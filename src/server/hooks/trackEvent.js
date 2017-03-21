import { get } from 'lodash';
import analytics from '../configs/analytics';

/* eslint-disable no-param-reassign */
export default function(event, traits = {}) {
  return (hook) => {
    const userId = get(hook, 'params.user._id');

    if (!userId) {
      throw new Error('Hook only useable after user-based JWT has been verified');
    }

    analytics.track({
      userId,
      event,
      traits,
    });

    return Promise.resolve(hook);
  }
}
