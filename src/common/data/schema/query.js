import todoQueries from './models/Todo/query';
import userQueries from './models/User/query';

export default function query(app) {
  return {
    ...todoQueries(app),
    ...userQueries(app),
  };
}
