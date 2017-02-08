import React from 'react';
import { Screen, View } from '@shoutem/ui';
import { Switch, Route, Redirect } from 'react-router-native';
import Badge from './Badge';
import LogIn from './LogIn';
import SignUp from './SignUp';

const Welcome = () => (
  <Screen>
    <View styleName="vertical lg-gutter h-center v-center">
      <Badge />
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route render={<Redirect path="/" />} />
      </Switch>
    </View>
  </Screen>
);

Welcome.propTypes = {};

export default Welcome;
