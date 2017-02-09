import React, { Component, PropTypes } from 'react';
import { Button, Form, Icon, Text, View } from 'native-base';
import { Link } from 'react-router-native';
import { Field } from 'redux-form';
import Input from './Input';
import styles from './Form.styles';

class SignUp extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  }

  static defaultProps = {}

  submit = ({ username, password }) => {
    const { signUp } = this.props;

    console.log('Simulate submit');
    console.log(username, password);
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Button full iconLeft style={{ ...styles.social, ...styles.facebook }}>
            <Icon name="logo-facebook" />
            <Text>Sign up with Facebook</Text>
          </Button>
          <Button full iconLeft style={{ ...styles.social, ...styles.google }}>
            <Icon name="logo-google" />
            <Text>Sign up with Google</Text>
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
              <Text>Sign up</Text>
            </Button>
          </Form>
        </View>
        <View style={styles.footer}>
          <Link component={Button} dark small to="/log-in" transparent>
            <Text light>LOG IN</Text>
          </Link>
          <Link component={Button} dark small to="/reset-password" transparent>
            <Text light>RESET PASSWORD</Text>
          </Link>
        </View>
      </View>
    );
  }
}

export default SignUp;
