import 'babel-polyfill';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { AppRegistry } from 'react-native';
import { NativeRouter } from 'react-router-native';
import config from 'react-native-config';
import Raven from 'raven-js';
import RavenRNPlugin from 'raven-js/plugins/react-native';
import App from './components/App';
import client from './configs/apollo';
import store from './store';

// Initialize Sentry error reporting
RavenRNPlugin(Raven);
Raven.config(config.SENTRY_DSN, { release: config.RELEASE_ID }).install();

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
