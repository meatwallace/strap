import client from '../config/apollo';

const middleware = [
  client.middleware(),
];

export default middleware;
