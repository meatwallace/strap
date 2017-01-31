import winston from 'winston';
import { get } from 'lodash';

export default function logger() {
  return (error, req, res, next) => {
    if (error) {
      const errorCode = get(error, 'code', '');

      const message = `${errorCode} - Route: ${req.url} - ${error.message}`;

      if (error.code === 404) {
        winston.info(message);
      } else {
        winston.error(message);
        winston.info(error.stack);
      }
    }

    next(error);
  };
}
