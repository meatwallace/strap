import { compose, graphql } from 'react-apollo';
import { reduxForm } from 'redux-form';
import * as mutations from '@common/data/mutations';
import validate from 'validate.js';
import SignUp from '../components/SignUp';

const { signUp, logInWithGoogle, logInWithFacebook } = mutations;

const constraints = {
  email: {
    email: true,
  },
  password: {
    length: {
      minimum: 3,
      maximum: 100,
    },
  },
};

export default compose(
  graphql(signUp, {
    props: ({ mutate }) => ({
      signUp: ({ email, password }) => mutate({ variables: { email, password } }),
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
)(SignUp);
