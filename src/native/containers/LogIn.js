import { compose } from 'lodash/fp';
import { graphql } from 'react-apollo';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import validate from 'validate.js';
import { trackEvent } from '@common/actions';
import * as mutations from '@common/data/mutations';
import LogIn from '../components/LogIn';

const { logIn, logInWithGoogle, logInWithFacebook } = mutations;

const constraints = {
  email: {
    email: true,
  },
};

export function mapStateToProps(state, ownProps) {
  return {};
}

const actions = { trackEvent };

export default compose(
  withRouter,
  connect(mapStateToProps, actions),
  graphql(logIn, {
    props: ({ mutate }) => ({
      logIn: ({ email, password }) => mutate({ variables: { email, password } }),
    }),
  }),
  graphql(logInWithFacebook, {
    props: ({ mutate }) => ({
      logInWithFacebook: ({ accessToken, refreshToken }) =>
        mutate({
          variables: {
            accessToken,
            refreshToken,
          },
        }),
    }),
  }),
  graphql(logInWithGoogle, {
    props: ({ mutate }) => ({
      logInWithGoogle: ({ accessToken, refreshToken }) =>
        mutate({
          variables: {
            accessToken,
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
