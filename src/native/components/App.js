import React from 'react';
import { Route, Switch, Redirect } from 'react-router-native';
import { View } from 'native-base';
// import Header from './Header';
// import Navigation from './Navigation';
import Home from './Home';

const App = () => (
  <View>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </View>
);

App.propTypes = {};

export default App;
