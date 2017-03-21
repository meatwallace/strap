import React, { Component, PropTypes } from 'react';
import { AsyncStorage, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Field } from 'redux-form';
import { google, facebook } from 'react-native-simple-auth';
import config from 'react-native-config';
import { get } from 'lodash';
import EventTypes from '@common/configs/eventTypes';
import variables from '@common/styles/variables';
import Input from './Input';
import Text from './Text';
import Button from './Button';

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
  submit: {
    marginBottom: 5,
  },
  error: {},
};


class SignUp extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    logInWithFacebook: PropTypes.func.isRequired,
    logInWithGoogle: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    trackEvent: PropTypes.func.isRequired,
  }

  state = {
    error: null,
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
    const { history, signUp } = this.props;

    try {
      const { data: { signUp: payload } } = await signUp({ email, password });

      await this.logInSuccess(payload);
    } catch (e) {
      this.handleGraphQLError(e);
    }
  }

  signUpWithFacebook = async () => {
    const { history, logInWithFacebook } = this.props;

    try {
      const { credentials } = await facebook({
        appId: config.FACEBOOK_NATIVE_APP_ID,
        callback: `${config.FACEBOOK_NATIVE_CALLBACK}://authorize`,
      });

      const { data: { logInWithFacebook: payload } } = await logInWithFacebook({
        accessToken: credentials.access_token,
      });

      await this.logInSuccess(payload);
    } catch (e) {
      this.handleGraphQLError(e);
    }
  }

  signUpWithGoogle = async () => {
    const { history, logInWithGoogle } = this.props;

    try {
      const { credentials } = await google({
        appId: config.GOOGLE_NATIVE_APP_ID,
        callback: `${config.GOOGLE_NATIVE_CALLBACK}:/oauth2redirect`
      });

      const { data: { logInWithGoogle: payload } } = await logInWithGoogle({
        accessToken: credentials.access_token,
        refreshToken: credentials.refresh_token,
      });

      await this.logInSuccess(payload);
    } catch (e) {
      this.handleGraphQLError(e);
    }
  }

  handleGraphQLError(e) {
    const error = get(e, 'graphQLErrors.[0].message', 'An error has occured. Please try again');

    this.setState({ error });
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    const { error } = this.state;

    return (
      <View style={styles.content}>
        <Button
          full
          color={facebookBlue}
          onPress={this.signUpWithFacebook}
          style={styles.social}
        >
          <Icon name="logo-facebook" color="#fff" style={styles.socialIcon} />
          <Text light>Sign up with Facebook</Text>
        </Button>
        <Button
          full
          color={googleRed}
          onPress={this.signUpWithGoogle}
          style={styles.social}
        >
          <Icon name="logo-google" color="#fff" style={styles.socialIcon} />
          <Text light>Sign up with Google</Text>
        </Button>
        <Text style={styles.divider}>OR</Text>
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
            disabled={submitting}
            onPress={handleSubmit(this.submit)}
            style={styles.submit}
            color={primary}
          >
            <Text light>Sign up</Text>
          </Button>
          { error && <Text light style={styles.error}>{error}</Text> }
        </View>
      </View>
    );
  }
}

export default SignUp;
