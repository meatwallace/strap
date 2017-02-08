import React, { Component } from 'react';
import { Button, Form, Input, Item, Label, Text, View } from 'native-base';
import Badge from './Badge';
import SocialButton from './SocialButton';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
  content: {
    flex: 8,
  },
  footer: {
    justifyContent: 'center',
    flex: 2,
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
          <SocialButton
            color="#3b5998"
            name="Facebook"
            icon="logo-facebook"
            signingUp={signingUp}
          />
          <SocialButton
            color="#d62d20"
            name="Google"
            icon="logo-google"
            signingUp={signingUp}
          />
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
