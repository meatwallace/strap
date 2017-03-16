import React, { PropTypes } from 'react';
import { Redirect, Route, Switch } from 'react-router-native';
import { AsyncStorage } from 'react-native';
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

const isAuthenticated = () => AsyncStorage.getItem('token');

const AuthedRoute = ({ component, ...rest }) => (
  <Route {...rest} render={(props) => {
    if (isAuthenticated) {
      return React.createElement(component, props);
    }

    return (<Redirect to="/login" />);
  }} />
);

AuthedRoute.propTypes = {
  component: PropTypes.func.isRequired,
}

// TODO: Remove excessive code duplication in login/signup pages by either merging
// or getting logic out into actions
const App = () => (
  <View style={styles.container}>
    {/* Routes */}
    <Switch>
      {/* Authed */}
      <AuthedRoute path="/home" component={Home} />
      <AuthedRoute path="/logout" component={LogOut} />

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
