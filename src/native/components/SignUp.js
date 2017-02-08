import React from 'react';
import { Button, Caption, Text, View, TextInput } from '@shoutem/ui';
import { Ionicons } from '@exponent/vector-icons';

const styles = {
  facebook: {
    backgroundColor: '#3b5998',
    justifyContent: 'space-between',
  },
  google: {
    backgroundColor: '#d62d20',
    justifyContent: 'space-between',
  },
};

const SignUp = () => (
  <View styleName="vertical flexible lg-gutter h-center v-center">
    <Button style={styles.facebook} styleName="full-width collapsible sm-gutter-bottom md-gutter-top">
      <Ionicons name="logo-facebook" size={28} color="#fff" />
      <Text styleName="bright">Sign in with Facebook</Text>
    </Button>
    <Button style={styles.google} styleName="full-width collapsible">
      <Ionicons name="logo-google" size={28} color="#fff" />
      <Text styleName="bright">Sign in with Google</Text>
    </Button>
    <Text styleName="md-gutter">Or</Text>
    <TextInput
      styleName="sm-gutter-bottom"
      placeholder={'Email'}
    />
    <TextInput
      styleName="md-gutter-bottom"
      placeholder={'Password'}
      secureTextEntry
    />
    <Button styleName="md-gutter-bottom dark">
      <Text>Login</Text>
    </Button>
    <Caption styleName="sm-gutter-bottom">Still not registered?</Caption>
    <Text>Sign up</Text>
  </View>
);

SignUp.propTypes = {};

export default SignUp;
