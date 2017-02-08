import React from 'react';
import { Route, Switch, Redirect } from 'react-router-native';
import { View, Screen, Text } from '@shoutem/ui';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';

const App = () => (
  <Screen>
    <Header />
    <View styleName="flexible lg-gutter-top">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </View>
    <Text>{location.pathname}</Text>
    <Navigation />
  </Screen>
);

App.propTypes = {};

export default App;
