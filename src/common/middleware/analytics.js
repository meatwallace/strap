import { get } from 'lodash';
import { EVENT_TYPES } from '../config/analytics';

export default store => next => action => {
  const analytics = get(action, 'meta.analytics');

  if (!analytics) {
    return next(action);
  }

  const { type, payload } = analytics;

  if (!type || !payload) {
    throw new Error('Analytics action meta requires type and payload');
  }

  EVENT_TYPES[type](payload);

  return next(action);
}