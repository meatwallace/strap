import React from 'react';
import { View } from 'native-base';
import { Redirect, Route, Switch } from 'react-router-native';
import Badge from './Badge';
import SignUp from '../containers/SignUp';
import LogIn from '../containers/LogIn';
import styles from './Welcome.styles';

const Welcome = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Badge size={150} />
    </View>
    <View style={styles.content}>
      <Switch>
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/log-in" component={LogIn} />
        {/* <Route exact path="/reset-password" component={ResetForm} /> */}
        <Route render={() => <Redirect to="/sign-up" />} />
      </Switch>
    </View>
  </View>
);

Welcome.propTypes = {};

Welcome.defaultProps = {};

export default Welcome;
