import React, { Component, PropTypes } from 'react';
import { AsyncStorage, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Field } from 'redux-form';
import { google, facebook } from 'react-native-simple-auth';
import config from 'react-native-config';
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
  submit: {},
};


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
      const { credentials } = await facebook({
        appId: config.FACEBOOK_NATIVE_APP_ID,
        callback: `${config.FACEBOOK_NATIVE_CALLBACK}://authorize`,
      });

      const { data: { logInWithFacebook: { accessToken } } } = await logInWithFacebook({
        accessToken: credentials.access_token,
      });

      await AsyncStorage.setItem('token', accessToken);

      history.push('/home');
    } catch (e) {
      console.log('TODO: Facebook sign in error handling');
      console.log(e);
    }
  }

  signUpWithGoogle = async () => {
    const { history, logInWithGoogle } = this.props;

    try {
      const { credentials } = await google({
        appId: config.GOOGLE_NATIVE_APP_ID,
        callback: `${config.GOOGLE_NATIVE_CALLBACK}:/oauth2redirect`
      });

      const { data: { logInWithGoogle: { accessToken } } } = await logInWithGoogle({
        accessToken: credentials.access_token,
        refreshToken: credentials.refresh_token,
      });

      await AsyncStorage.setItem('token', accessToken);

      history.push('/home');
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
        </View>
      </View>
    );
  }
}

export default SignUp;
