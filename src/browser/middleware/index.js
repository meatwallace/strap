import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import history from '../configs/history';
import client from '../configs/apollo';

const middleware = [
  routerMiddleware(history),
  client.middleware(),
];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ collapsed: true });

  middleware.push(logger);
}

export default middleware;
