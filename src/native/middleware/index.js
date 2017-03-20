import analytics from '@common/middleware';
import client from '../config/apollo';

const middleware = [
  client.middleware(),
  analytics,
];

export default middleware;
