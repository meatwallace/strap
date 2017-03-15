import React from 'react';
import { Redirect, Route, Switch } from 'react-router-native';
import { View } from 'native-base';
import SignUp from '../containers/SignUp';
import LogIn from '../containers/LogIn';
import LogOut from '../containers/LogOut';
import Home from './Home';

const styles = {
  container: {
    flex: 1,
  },
};

// TODO: Remove excessive code duplication in login/signup pages by either merging
// or getting logic out into actions
const App = () => (
  <View style={styles.container}>
    {/* Routes */}
    <Switch>
      {/* Authed */}
      <Route path="/home" component={Home} />
      <Route path="/logout" component={LogOut} />

      {/* Unauthed */}
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Redirect to="/signup" />
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
