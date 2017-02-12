import { compose, graphql } from 'react-apollo';
import { reduxForm } from 'redux-form';
import { signUp, logIn } from '@common/data/mutations';
import validate from 'validate.js';
import { user } from '@common/data/queries';
import SignUp from '../components/SignUp';

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
  graphql(user, { options: { forceFetch: true } }),
  graphql(logIn, {
    props: ({ mutate }) => ({
      logIn: ({ email, password }) => mutate({ variables: { email, password } }),
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
