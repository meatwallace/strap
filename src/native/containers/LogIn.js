import { graphql, compose } from 'react-apollo';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-native';
import validate from 'validate.js';
import * as mutations from '@common/data/mutations';
import LogIn from '../components/LogIn';

const { logIn, logInWithGoogle, logInWithFacebook } = mutations;

const constraints = {
  email: {
    email: true,
  },
};

export default compose(
  withRouter,
  graphql(logIn, {
    props: ({ mutate }) => ({
      logIn: ({ email, password }) => mutate({ variables: { email, password } }),
    }),
  }),
  graphql(logInWithFacebook, {
    props: ({ mutate }) => ({
      logInWithFacebook: ({ accessToken, email, facebookId, firstName, lastName, refreshToken }) =>
        mutate({
          variables: {
            accessToken,
            email,
            facebookId,
            firstName,
            lastName,
            refreshToken,
          },
        }),
    }),
  }),
  graphql(logInWithGoogle, {
    props: ({ mutate }) => ({
      logInWithGoogle: ({ accessToken, email, googleId, firstName, lastName, refreshToken }) =>
        mutate({
          variables: {
            accessToken,
            email,
            googleId,
            firstName,
            lastName,
            refreshToken,
          },
        }),
    }),
  }),
  reduxForm({
    form: 'welcome',
    destroyOnUnmount: false,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    validate: values => validate(values, constraints),
  }),
)(LogIn);
