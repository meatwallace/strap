import Analytics from 'analytics-react-native';

const analytics = new Analytics(process.env.SEGMENT_KEY);

export const EVENT_TYPES = {
  IDENTIFY: analytics.identify,
  TRACK: analytics.track,
  SCREEN: analytics.screen,
  PAGE: analytics.page,
  GROUP: analytics.group,
  ALIAS: analytics.alias,
}

export default analytics;