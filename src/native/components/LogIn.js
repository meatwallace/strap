import React, { Component, PropTypes } from 'react';
import { Button, Form, Icon, Text, View } from 'native-base';
import { Link } from 'react-router-native';
import { Field } from 'redux-form';
import Input from './Input';
import styles from './Form.styles';

class LogIn extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    logIn: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  }

  static defaultProps = {}

  submit = ({ username, password }) => {
    const { logIn } = this.props;

    console.log('Simulate submit');
    console.log(username, password);
  }

  render() {
    const { handleSubmit, submitting } = this.props;

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
              component={Input}
              icon="mail"
              keyboardType="email-address"
              name="username"
              placeholder="Email"
              styles={styles}
            />
            <Field
              component={Input}
              icon="lock"
              name="password"
              secureTextEntry
              placeholder="Password"
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
          <Link component={Button} dark small to="/sign-up" transparent>
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
