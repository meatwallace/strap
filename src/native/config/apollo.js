import ApolloClient, { createBatchingNetworkInterface } from 'apollo-client';
import { AsyncStorage } from 'react-native';

const host = process.env.HOST;
const port = process.env.PORT;

const batchingNetworkInterface = createBatchingNetworkInterface({
  uri: `http://${host}:${port}/graphql`,
  batchInterval: 10,
});

/* eslint-disable no-param-reassign */
batchingNetworkInterface.use([{
  async applyBatchMiddleware(req, next) {
    const token = await AsyncStorage.getItem('token');

    if (!req.options.headers) {
      req.options.headers = {};
    }

    if (token !== null) {
      req.options.headers.authorization = token;
    }

    return next();
  },
}]);
/* eslint-enable */

const client = new ApolloClient({
  dataIdFromObject: o => o._id,
  networkInterface: batchingNetworkInterface,
});

export default client;
