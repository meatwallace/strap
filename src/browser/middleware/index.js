import createLogger from 'redux-logger';
import client from '@common/config/apollo';

const middleware = [
  client.middleware(),
];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ collapsed: true });

  middleware.push(logger);
}
export default middleware;
