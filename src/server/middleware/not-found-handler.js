import errors from 'feathers-errors';

export default function notFoundHandler() {
  return (req, res, next) => {
    next(new errors.NotFound('Page not found'));
  };
}
