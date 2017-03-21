import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Link, Redirect, Route, Switch } from 'react-router-native';
import FullLayout from './Layouts/Full';
import WelcomeHeader from './WelcomeHeader';
import Button from './Button';
import Text from './Text';
import LogIn from '../containers/LogIn';
import SignUp from '../containers/SignUp';
import ResetPassword from '../containers/ResetPassword';

const styles = {
  footer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    maxHeight: 30,
    justifyContent: 'space-between',
  },
};

const FooterLink = ({ to, label }) => (
  <Link component={Button} to={to}>
    <Text light>{label}</Text>
  </Link>
);

FooterLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const LogInLink = () => (<FooterLink to="/welcome/login" label="LOG IN" />);
const SignUpLink = () => (<FooterLink to="/welcome/signup" label="SIGN UP" />);
const ResetPasswordLink = () => (<FooterLink to="/welcome/reset-password" label="RESET PASSWORD" />);

const Welcome = () => (
  <FullLayout>
    <Route path="/welcome/signup" children={({ match }) => (
      <WelcomeHeader large={!match} />
    )} />
    {/* Content */}
    <Switch>
      <Route path="/welcome/signup" component={SignUp} />
      <Route path="/welcome/login" component={LogIn} />
      <Route path="/welcome/reset-password" component={ResetPassword} />
      <Redirect to="/welcome/signup" />
    </Switch>
    <View style={styles.footer}>
      {/* Left button */}
      <Switch>
        <Route path="/welcome/signup" component={LogInLink} />
         {/* Renders on reset password and login screen*/}
        <Route component={SignUpLink} />
      </Switch>
      {/* Right button */}
      <Switch>
        <Route path="/welcome/reset-password" component={LogInLink} />
        {/* Renders on sign up and login screen*/}
        <Route component={ResetPasswordLink} />
      </Switch>
    </View>
  </FullLayout>
)

export default Welcome;
