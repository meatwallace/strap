import userQueries from './User/query';

export default function rootQuery(app) {
  return {
    ...userQueries(app),
  };
}
