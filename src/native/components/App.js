import React, { Component, PropTypes } from 'react';
import { Route, Switch, Redirect } from 'react-router-native';
import { View } from 'native-base';
import Header from './Header';
import Home from './Home';
import Info from './Info';
import LogOut from './LogOut';
import Navigation from './Navigation';
import Todos from './Todos';
import Welcome from './Welcome';

const welcomeRoutes = [
  '/login',
  '/logout',
  '/reset-password',
  '/signup',
];

const styles = {
  container: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    justifyContent: 'space-between',
    padding: 20,
  },
};

class App extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      user: PropTypes.object,
    }).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  static defaultProps = {}

  isLoggedIn = () => this.props.data.user;

  render() {
    const { location: { pathname } } = this.props;

    return (
      <View style={styles.container}>
        { !welcomeRoutes.includes(pathname) && <Header /> }
        <View style={styles.content}>
          <Switch>
            <Route exact path="/login" component={Welcome} />
            <Route exact path="/signup" component={Welcome} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/todos" component={Todos} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/logout" component={LogOut} />
            <Route render={() => <Redirect to="/signup" />} />
          </Switch>
        </View>
        { !welcomeRoutes.includes(pathname) && <Navigation /> }
      </View>
    );
  }
}

export default App;
