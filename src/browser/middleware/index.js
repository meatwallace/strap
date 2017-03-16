import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import history from '@common/config/history';
import client from '@common/config/apollo';

const middleware = [
  routerMiddleware(history),
  client.middleware(),
];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ collapsed: true });

  middleware.push(logger);
}

export default middleware;
