import React from 'react';
import { View } from 'native-base';
import { Route, Switch } from 'react-router-native';
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
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        {/* <Route exact path="/reset-password" component={ResetForm} /> */}
      </Switch>
    </View>
  </View>
);

Welcome.propTypes = {};

Welcome.defaultProps = {};

export default Welcome;
