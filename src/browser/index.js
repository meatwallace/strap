import React from 'react';
import { render } from 'react-dom';
import { AppContainer as HotReload } from 'react-hot-loader';
import App from './components/App';
import getRootNode from './lib/getRootNode';

render(
  <HotReload>
    <App />
  </HotReload>,
  getRootNode('root'),
);

if (module.hot) {
  // module.hot.accept('./reducer', () => {
  //   store.replaceReducer(appReducer);
  // });

  module.hot.accept();
}
