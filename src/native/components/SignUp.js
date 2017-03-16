import React, { Component, PropTypes } from 'react';
import { Button, Form, Icon, Text, View } from 'native-base';
import { AsyncStorage } from 'react-native';
import { Link } from 'react-router-native';
import { Field } from 'redux-form';
import { google, facebook } from 'react-native-simple-auth';
import config from 'react-native-config';
import variables from '@common/styles/variables';
import FullLayout from './Layouts/Full';
import Input from './Input';
import Badge from './Badge';

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

// TODO: Loading spinner for mutation

class SignUp extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    logInWithFacebook: PropTypes.func.isRequired,
    logInWithGoogle: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  }

  submit = async ({ email, password }) => {
    const { history, signUp } = this.props;

    try {
      const { data: { signUp: { token } } } = await signUp({ email, password });

      await AsyncStorage.setItem('token', token);

      history.push('/home');
    } catch (e) {
      console.log('TODO: SignUp error handling');
      console.log(e);
    }
  }

  signUpWithFacebook = async () => {
    const { history, logInWithFacebook } = this.props;

    try {
      const { user, credentials } = await facebook({
        appId: config.FACEBOOK_NATIVE_APP_ID,
        callback: `${config.FACEBOOK_NATIVE_CALLBACK}://authorize`,
      });

      const { data: { logInWithFacebook: { token } } } = await logInWithFacebook({
        email: user.email,
        facebookId: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        accessToken: credentials.access_token,
      });

      await AsyncStorage.setItem('token', token);

      history.push('/home');
    } catch (e) {
      console.log('TODO: Facebook sign in error handling');
      console.log(e);
    }
  }

  signUpWithGoogle = async () => {
    const { history, logInWithGoogle } = this.props;

    try {
      const { user, credentials } = await google({
        appId: config.GOOGLE_NATIVE_APP_ID,
        callback: `${config.GOOGLE_NATIVE_CALLBACK}:/oauth2redirect`
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

      history.push('/home');
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
            <Text>Sign up with Facebook</Text>
          </Button>
          <Button
            full
            iconLeft
            style={{ ...styles.social, ...styles.google }}
            onPress={this.signUpWithGoogle}
          >
            <Icon name="logo-google" color="#fff" />
            <Text>Sign up with Google</Text>
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
              <Text>Sign up</Text>
            </Button>
          </Form>
        </View>
        <View style={styles.footer}>
          <Link component={Button} dark small to="/login" transparent>
            <Text light>LOG IN</Text>
          </Link>
          <Link component={Button} dark small to="/reset-password" transparent>
            <Text light>RESET PASSWORD</Text>
          </Link>
        </View>
      </FullLayout>
    );
  }
}

export default SignUp;
