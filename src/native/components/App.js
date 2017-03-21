import React, { PropTypes } from 'react';
import { Redirect, Route, Switch } from 'react-router-native';
import { AsyncStorage, View } from 'react-native';
import Welcome from '../components/Welcome';
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
