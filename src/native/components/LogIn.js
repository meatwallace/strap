import React from 'react';
import { Button, Form, Icon, Input, Item, Label, Text, View } from 'native-base';

const styles = {
  container: {
    alignItems: 'center',
  },
  facebook: {
    backgroundColor: '#3b5998',
    marginBottom: 5,
  },
  google: {
    backgroundColor: '#d62d20',
  },
  divider: {
    marginBottom: 10,
    marginTop: 20,
  },
  form: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  formGroup: {
    margin: 0,
  },
  label: {
    paddingLeft: 5,
  },
  login: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  notRegistered: {
    alignSelf: 'center',
    marginBottom: 5,
  },
  signUp: {
    alignSelf: 'center',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
};

const LogIn = () => (
  <View style={styles.container}>
    <Button
      full
      iconLeft
      style={styles.facebook}
    >
      <Icon name="logo-facebook" />
      <Text>Login with Facebook</Text>
    </Button>
    <Button
      full
      iconLeft
      style={styles.google}
    >
      <Icon name="logo-google" />
      <Text>Login with Google</Text>
    </Button>
    <Text style={styles.divider}>Or</Text>
    <Form style={styles.form}>
      <Item style={styles.formGroup} inlineLabel>
        <Label style={styles.label}>Email</Label>
        <Input
          keyboardType="email-address"
          placeholder="danny@dingo.com"
        />
      </Item>
      <Item style={styles.formGroup} inlineLabel>
        <Label style={styles.label}>Password</Label>
        <Input
          placeholder="******"
          secureTextEntry
        />
      </Item>
    </Form>
    <Button
      onPress={() => console.log('Log in!')}
      primary
      style={styles.login}
    >
      <Text>Login</Text>
    </Button>
    <Text style={styles.notRegistered}>{'Don\'t have an account yet?'}</Text>
    <Text
      onPress={() => console.log('Sign up!')}
      style={styles.signUp}
    >
      Tap to Register
    </Text>
  </View>
);

LogIn.propTypes = {};

export default LogIn;
