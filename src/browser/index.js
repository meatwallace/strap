import React from 'react';
import { render } from 'react-dom';
import { AppContainer as HotReload } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import client from './configs/apolloClient';
import getRootNode from './lib/getRootNode';
import { store } from './store';

render(
  <HotReload>
    <ApolloProvider client={client} store={store}>
      <App />
    </ApolloProvider>
  </HotReload>,
  getRootNode('root'),
);

if (module.hot) {
  module.hot.accept();
}
