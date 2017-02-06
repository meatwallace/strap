import createLogger from 'redux-logger';
import isDev from '~/config/isDev';
import client from '../config/apolloClient';

const middleware = [
  client.middleware(),
];

if (isDev) {
  const logger = createLogger({ collapsed: true });

  middleware.push(logger);
}
export default middleware;
