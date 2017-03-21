import React from 'react';
import { Redirect, Route, Switch } from 'react-router-native';
import { View } from 'react-native';
import Welcome from './Welcome';
import AuthedRoute from './AuthedRoute';
import LogOut from '../containers/LogOut';
import Home from './Home';

const styles = {
  container: {
    flex: 1,
  },
};

const App = () => (
  <View style={styles.container}>
    {/* Routes */}
    <Switch>
      {/* Authed */}
      <AuthedRoute path="/home" component={Home} />
      <AuthedRoute path="/logout" component={LogOut} />

      {/* Unauthed */}
      <Route path="/welcome" component={Welcome} />
      <Redirect to="/welcome" />
    </Switch>

    {/* Modals */}
    <Switch>
      {/* Authed */}

      {/* Unauthed */}
      <Route component={null} />
    </Switch>
  </View>
);

export default App;
