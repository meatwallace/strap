import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotReload } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import { connectRouter } from 'connected-react-router';
import reducer from './reducers';
import App from './components/App';
import client from './configs/apolloClient';
import history from './configs/history';
import getRootNode from './lib/getRootNode';
import { store } from './store';

const render = () => {
  ReactDOM.render(
    <HotReload>
      <ApolloProvider client={client} store={store}>
        <App history={history} />
      </ApolloProvider>
    </HotReload>,
    getRootNode('root'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });

  module.hot.accept('./reducers', () => {
    store.replaceReducer(connectRouter(history)(reducer));
  });
}
