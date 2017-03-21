import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotReload } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import Raven from 'raven-js';
import getRootNode from '@common/lib/getRootNode';
import history from './configs/history';
import client from './configs/apollo';
import reducer from './reducers';
import App from './components/App';
import store from './store';

Raven.config(process.env.SENTRY_DSN).install();

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
    store.replaceReducer(reducer);
  });
}
