import React from 'react';
import { Route, Switch } from 'react-router-native';
import { View, Screen } from '@shoutem/ui';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';

const App = () => (
  <Screen>
    <Header />
    <View styleName="flexible lg-gutter-top">
      <Switch>
        <Route exact path="/" render={Home} />
      </Switch>
    </View>
    <Navigation />
  </Screen>
);

App.propTypes = {};

export default App;
