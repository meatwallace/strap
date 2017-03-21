import React, { Component, PropTypes } from 'react';
import { AsyncStorage, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Field } from 'redux-form';
import { google, facebook } from 'react-native-simple-auth';
import config from 'react-native-config';
import variables from '@common/styles/variables';
import EventTypes from '@common/configs/eventTypes';
import Input from './Input';
import Button from './Button';
import Text from './Text';

const { facebookBlue, googleRed, primary } = variables;

const styles = {
  content: {
    flex: 6,
  },
  social: {
    marginBottom: 5,
  },
  socialIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  divider: {
    alignSelf: 'center',
    marginBottom: 5,
  },
  form: {
    flex: 1,
    alignItems: 'stretch',
  },
  submit: {},
};

class LogIn extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    logIn: PropTypes.func.isRequired,
    logInWithFacebook: PropTypes.func.isRequired,
    logInWithGoogle: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    submitting: PropTypes.bool.isRequired,
  }

  logInSuccess = async (payload) => {
    const { history, trackEvent } = this.props;
    const { accessToken, user } = payload;
    const { firstName, lastName, email, googleId, facebookId, gender } = user;
  
    await AsyncStorage.setItem('token', accessToken);
    await AsyncStorage.setItem('userId', user._id);

    trackEvent(EventTypes.Identify, {
      traits: {
        firstName,
        lastName,
        email,
        googleId,
        facebookId,
        gender,
      },
    });

    trackEvent(EventTypes.Track, {
      event: 'Logged In',
    });

    history.push('/home');
  }

  submit = async ({ email, password }) => {
    const { logIn } = this.props;

    try {
      const { data: { logIn: payload } } = await logIn({ email, password });

      this.logInSuccess(payload);
    } catch (e) {
      console.log('TODO: LogIn error handling');
      console.log(e);
    }
  }

  signUpWithFacebook = async () => {
    const { logInWithFacebook } = this.props;

    try {
      const { credentials } = await facebook({
        appId: config.FACEBOOK_NATIVE_APP_ID,
        callback: `${config.FACEBOOK_NATIVE_CALLBACK}://authorize`,
      });

      const { data: { logInWithFacebook: payload } } = await logInWithFacebook({
        accessToken: credentials.access_token,
      });

      this.logInSuccess(payload);
    } catch (e) {
      console.log('TODO: Facebook sign in error handling');
      console.log(e);
    }
  }

  signUpWithGoogle = async () => {
    const { logInWithGoogle } = this.props;

    try {
      const { credentials } = await google({
        appId: config.GOOGLE_NATIVE_APP_ID,
        callback: `${config.GOOGLE_NATIVE_CALLBACK}:/oauth2redirect`
      });

      const { data: { logInWithGoogle: payload} } = await logInWithGoogle({
        accessToken: credentials.access_token,
        refreshToken: credentials.refresh_token,
      });

      this.logInSuccess(payload);
    } catch (e) {
      console.log('TODO: Google sign in error handling');
      console.log(e);
    }
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <View style={styles.content}>        
        <Button
          full
          color={facebookBlue}
          onPress={this.signUpWithFacebook}
          style={styles.social}
        >
          <Icon name="logo-facebook" color="#fff" style={styles.socialIcon} />
          <Text light>Log in with Facebook</Text>
        </Button>
        <Button
          full
          color={googleRed}
          onPress={this.signUpWithGoogle}
          style={styles.social}
        >
          <Icon name="logo-google" color="#fff" style={styles.socialIcon} />
          <Text light>Log in with Google</Text>
        </Button>
        <Text light style={styles.divider}>OR</Text>
        <View style={styles.form}>
          <Field
            autoCapitalize="none"
            autoCorrect={false}
            component={Input}
            icon="md-mail"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            returnKeyType="next"
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
          />
          <Button
            full
            color={primary}
            disabled={submitting}
            onPress={handleSubmit(this.submit)}
            style={styles.submit}
          >
            <Text light>Log in</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default LogIn;
