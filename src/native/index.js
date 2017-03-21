import 'babel-polyfill';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { AppRegistry } from 'react-native';
import { NativeRouter } from 'react-router-native';
import App from './components/App';
import client from './configs/apollo';
import store from './store';

console.disableYellowBox = true;

// All of our configuration level stuff - routing, GraphQL, Native-Base theme
const Root = () => (
  <ApolloProvider client={client} store={store}>
    <NativeRouter>
      <App />
    </NativeRouter>
  </ApolloProvider>
);

AppRegistry.registerComponent('strap', () => Root);
