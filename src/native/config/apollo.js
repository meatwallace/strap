import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { AsyncStorage } from 'react-native';
import config from './config';

const networkInterface = createNetworkInterface({ uri: config.get('graphQL') });

/* eslint-disable no-param-reassign */
networkInterface.use([{
  async applyMiddleware(req, next) {
    const token = await AsyncStorage.getItem('token');

    if (!req.options.headers) {
      req.options.headers = {};
    }

    if (token !== null) {
      req.options.headers.authorization = token;
    }

    next();
  },
}]);
/* eslint-enable */

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o._id,
});

export default client;
