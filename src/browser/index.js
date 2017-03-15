import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotReload } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import client from '@common/config/apollo';
import history from '@common/config/history';
import getRootNode from '@common/lib/getRootNode';
import reducer from './reducers';
import App from './components/App';
import store from './store';

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
