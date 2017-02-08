import React, { Component } from 'react';
import { Button, Form, Icon, Input, Item, Label, Text, View } from 'native-base';
import Badge from './Badge';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    // backgroundColor: 'blue',
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
  content: {
    // backgroundColor: 'green',
    flex: 8,
  },
  footer: {
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    flex: 2,
  },
  facebook: {
    backgroundColor: '#3b5998',
    marginBottom: 5,
  },
  google: {
    backgroundColor: '#d62d20',
  },
  divider: {
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  form: {
    alignSelf: 'stretch',
  },
  formGroup: {
    margin: 0,
  },
  label: {
    paddingLeft: 5,
    paddingRight: 0,
    width: 80,
  },
  action: {
    alignSelf: 'center',
    marginTop: 20,
  },
  registered: {
    alignSelf: 'center',
    marginBottom: 5,
  },
  toggle: {
    alignSelf: 'center',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
};

class Welcome extends Component {
  static propTypes = {}

  static defaultProps = {}

  state = {
    signingUp: true,
  }

  toggleLogin = () => {
    const { signingUp } = this.state;

    this.setState({ signingUp: !signingUp });
  }

  render() {
    const { signingUp } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Badge size={100} />
        </View>
        <View style={styles.content}>
          <Button
            full
            iconLeft
            style={styles.facebook}
          >
            <Icon name="logo-facebook" />
            <Text>{ signingUp ? 'Register' : 'Log in' } with Facebook</Text>
          </Button>
          <Button
            full
            iconLeft
            style={styles.google}
          >
            <Icon name="logo-google" />
            <Text>
              { signingUp ? 'Register' : 'Log in' } with Google
            </Text>
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
            { signingUp &&
              <Item style={styles.formGroup} inlineLabel>
                <Label style={styles.label}>Confirm</Label>
                <Input
                  placeholder="******"
                  secureTextEntry
                />
              </Item> }
            <Button
              onPress={() => console.log('Sign up!')}
              primary
              style={styles.action}
            >
              <Text>
                { signingUp ? 'Sign up' : 'Log in' }
              </Text>
            </Button>
          </Form>
        </View>
        <View style={styles.footer}>
          <Text style={styles.registered}>
            { signingUp ? 'Already have an account?' : 'Don\'t have an account yet?' }
          </Text>
          <Text
            component={Text}
            style={styles.toggle}
            onPress={this.toggleLogin}
          >
            { signingUp ? 'Tap here to log in' : 'Tap here to register' }
          </Text>
        </View>
      </View>
    );
  }
}

export default Welcome;
