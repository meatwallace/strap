import React, { Component, PropTypes } from 'react';
import { AsyncStorage } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import { View } from 'native-base';
// import Header from './Header';
// import Navigation from './Navigation';
import Welcome from './Welcome';
import Home from './Home';

class App extends Component {
  propTypes = {
    data: PropTypes.object,
  };

  defaultProps = {}

  logout = () => {
    AsyncStorage.removeItem('token');
    // TODO: Clear Apollo cache
  }

  isLoggedIn = () => this.props.data.user;

  render() {
    return (
      <View>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Welcome} />
          <Route exact path="/signup" component={Welcome} />
          <Route render={() => <Redirect to="/signup" />} />
        </Switch>
      </View>
    );
  }
}

export default App;
