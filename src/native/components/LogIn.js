import React, { Component, PropTypes } from 'react';
import { Button, Form, Icon, Text, View } from 'native-base';
import { AsyncStorage } from 'react-native';
import { Link } from 'react-router-native';
import { Field } from 'redux-form';
import Input from './Input';
import styles from './Form.styles';

class LogIn extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      user: PropTypes.object,
    }).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    logIn: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  }

  static defaultProps = {}

  shouldComponentUpdate(nextProps) {
    const { data: { user } } = nextProps;
    const { router } = this.context;

    if (user) {
      router.push('/home');

      return false;
    }

    return true;
  }

  submit = async ({ email, password }) => {
    const { router } = this.context;
    const { logIn } = this.props;
    try {
      const { data: { logIn: { token } } } = await logIn({ email, password });

      await AsyncStorage.setItem('token', token);

      router.push('/home');
    } catch (e) {
      console.log('Error');
      console.log(e);
      console.log(e.error);
      console.log(e.info);
      console.log(e.graphQLErrors);
      // TODO: Error handling
    }
  }

  render() {
    const { data: { loading }, handleSubmit, submitting } = this.props;

    if (loading) {
      return <Text>Loading</Text>;
    }

    return (
      <View style={styles.container}>
        <View style={styles.signUp}>
          <Button full iconLeft style={{ ...styles.social, ...styles.facebook }}>
            <Icon name="logo-facebook" />
            <Text>Log in with Facebook</Text>
          </Button>
          <Button full iconLeft style={{ ...styles.social, ...styles.google }}>
            <Icon name="logo-google" />
            <Text>Log in with Google</Text>
          </Button>
          <Text style={styles.divider}>OR</Text>
          <Form style={styles.form}>
            <Field
              autoCapitalize="none"
              autoCorrect={false}
              component={Input}
              icon="mail"
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
              icon="lock"
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
      </View>
    );
  }
}

export default LogIn;
