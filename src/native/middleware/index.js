import config from 'react-native-config';
import analytics from '@common/lib/analyticsMiddleware';
import client from '../configs/apollo';

const middleware = [
  client.middleware(),
  analytics(config.SEGMENT_KEY),
];

export default middleware;
