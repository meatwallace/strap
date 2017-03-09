import ApolloClient, { createBatchingNetworkInterface } from 'apollo-client';
import { AsyncStorage } from 'react-native';
import settings from '@common/settings';

const { graphQLEndpoint } = settings;

const batchingNetworkInterface = createBatchingNetworkInterface({
  uri: graphQLEndpoint,
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
  dataIdFromObject: o => o.id,
  networkInterface: batchingNetworkInterface,
});

export default client;
