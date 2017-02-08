import React from 'react';
import { Switch, Route, Redirect } from 'react-router-native';
import { View } from 'native-base';
import Badge from './Badge';
import LogIn from './LogIn';
// import SignUp from './SignUp';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  branding: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
  form: {
    alignItems: 'stretch',
    flex: 5,
    justifyContent: 'center',
  },
};

const Welcome = () => (
  <View style={styles.container}>
    <View style={styles.branding}>
      <Badge />
    </View>
    <View style={styles.form}>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route render={() => <Redirect path="/" />} />
      </Switch>
    </View>
  </View>
);

export default Welcome;
