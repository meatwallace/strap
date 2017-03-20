import ApolloClient, { createBatchingNetworkInterface } from 'apollo-client';

export default function(host, port, getToken) {
  const batchingNetworkInterface = createBatchingNetworkInterface({
    uri: `http://${host}:${port}/graphql`,
    batchInterval: 10,
  });

  /* eslint-disable no-param-reassign */
  batchingNetworkInterface.use([{
    applyBatchMiddleware(req, next) {
      const token = getToken();

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

  return client;
}
