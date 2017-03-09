import React, { Component, PropTypes } from 'react';
import { Button, Form, Icon, Text, View } from 'native-base';
import { AsyncStorage } from 'react-native';
import { Link } from 'react-router-native';
import { Field } from 'redux-form';
import { google, facebook } from 'react-native-simple-auth';
import variables from '@common/styles/variables';
import settings from '@common/settings';
import FullLayout from './Layouts/Full';
import Input from './Input';
import Badge from './Badge';

const {
  google: {
    appId: googleAppId,
    callback: googleCallback,
  },
  facebook: {
    appId: facebookAppId,
    callback: facebookCallback,
  },
} = settings;

const { facebookBlue, googleRed } = variables;

const styles = {
  header: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
  content: {
    flex: 6,
  },
  footer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    maxHeight: 30,
    justifyContent: 'space-between',
  },
  social: {
    marginBottom: 5,
  },
  facebook: {
    backgroundColor: facebookBlue,
  },
  google: {
    backgroundColor: googleRed,
  },
  divider: {
    alignSelf: 'center',
    color: '#777',
    marginBottom: 5,
  },
  form: {
    alignItems: 'stretch',
  },
  icon: {
    color: '#777',
    flex: 1,
    maxWidth: 40,
    paddingLeft: 10,
  },
  group: {
    marginBottom: 5,
    marginLeft: 0,
  },
  input: {

  },
  submit: {},
};

class LogIn extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    logIn: PropTypes.func.isRequired,
    logInWithFacebook: PropTypes.func.isRequired,
    logInWithGoogle: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  }

  submit = async ({ email, password }) => {
    const { router } = this.context;
    const { logIn } = this.props;

    try {
      const { data: { logIn: { token } } } = await logIn({ email, password });

      await AsyncStorage.setItem('token', token);

      router.push('/warning');
    } catch (e) {
      console.log('TODO: LogIn error handling');
      console.log(e);
    }
  }

  signUpWithFacebook = async () => {
    const { router } = this.context;
    const { logInWithFacebook } = this.props;

    try {
      const { user, credentials } = await facebook({
        appId: facebookAppId,
        callback: facebookCallback,
      });

      const { data: { logInWithFacebook: { token } } } = await logInWithFacebook({
        email: user.email,
        facebookId: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        accessToken: credentials.access_token,
      });

      await AsyncStorage.setItem('token', token);

      router.push('/home');
    } catch (e) {
      console.log('TODO: Facebook sign in error handling');
      console.log(e);
    }
  }

  signUpWithGoogle = async () => {
    const { router } = this.context;
    const { logInWithGoogle } = this.props;

    try {
      const { user, credentials } = await google({
        appId: googleAppId,
        callback: googleCallback,
      });

      const { data: { logInWithGoogle: { token } } } = await logInWithGoogle({
        email: user.email,
        googleId: user.id,
        firstName: user.given_name,
        lastName: user.family_name,
        accessToken: credentials.access_token,
        refreshToken: credentials.refresh_token,
      });

      await AsyncStorage.setItem('token', token);

      router.push('/home');
    } catch (e) {
      console.log('TODO: Google sign in error handling');
      console.log(e);
    }
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <FullLayout>
        <View style={styles.header}>
          <Badge />
        </View>
        <View style={styles.content}>
          <Button
            full
            iconLeft
            style={{ ...styles.social, ...styles.facebook }}
            onPress={this.signUpWithFacebook}
          >
            <Icon name="logo-facebook" color="#fff" />
            <Text>Log in with Facebook</Text>
          </Button>
          <Button
            full
            iconLeft
            style={{ ...styles.social, ...styles.google }}
            onPress={this.signUpWithGoogle}
          >
            <Icon name="logo-google" color="#fff" />
            <Text>Log in with Google</Text>
          </Button>
          <Text style={styles.divider}>OR</Text>
          <Form style={styles.form}>
            <Field
              autoCapitalize="none"
              autoCorrect={false}
              component={Input}
              icon="md-mail"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              returnKeyType="next"
              styles={styles}
            />
            <Field
              autoCapitalize="none"
              autoCorrect={false}
              component={Input}
              icon="md-lock"
              name="password"
              secureTextEntry
              placeholder="Password"
              returnKeyType="go"
              styles={styles}
            />
            <Button
              full
              block
              disabled={submitting}
              onPress={handleSubmit(this.submit)}
              style={styles.submit}
            >
              <Text>Log in</Text>
            </Button>
          </Form>
        </View>
        <View style={styles.footer}>
          <Link component={Button} dark small to="/signup" transparent>
            <Text light>SIGN UP</Text>
          </Link>
          <Link component={Button} dark small to="/reset-password" transparent>
            <Text light>RESET PASSWORD</Text>
          </Link>
        </View>
      </FullLayout>
    );
  }
}

export default LogIn;
