import createLogger from 'redux-logger';
import client from '../configs/apolloClient';

const middleware = [
  client.middleware(),
];

const debug = process.env.NODE_ENV === 'development' || true;

if (debug) {
  const logger = createLogger({ collapsed: true });

  middleware.push(logger);
}
export default middleware;
