import { get } from 'lodash';
import { AsyncStorage } from 'react-native';
import Analytics from './analytics';
import EventTypes from '../config/eventTypes';

export default function(key) {
  const analytics = new Analytics(key);

  const eventFuncs = {
    [EventTypes.Identify]: analytics.identify,
    [EventTypes.Track]: analytics.track,
    [EventTypes.Screen]: analytics.screen,
    [EventTypes.Page]: analytics.page,
    [EventTypes.Group]: analytics.group,
    [EventTypes.Alias]: analytics.alias,
  };

  return store => next => async action => {
    const data = get(action, 'meta.analytics');

    const userId = await AsyncStorage.getItem('userId');

    if (!data) {
      return next(action);
    }

    const { type, payload } = data;

    if (!type || !payload) {
      throw new Error('Analytics action meta requires type and payload');
    }

    eventFuncs[type]({ userId, ...payload });

    return next(action);
  }
}