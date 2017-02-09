import { compose } from 'lodash/fp';
import { graphql } from 'react-apollo';
import { reduxForm } from 'redux-form';
import validate from 'validate.js';
import { logIn } from '@common/mutations';
import LogIn from '../components/LogIn';

const constraints = {
  username: {
    email: true,
  },
};

export default compose(
  graphql(logIn, {
    props: ({ mutate }) => ({
      logIn: (username, password) => mutate({ variables: { username, password } }),
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
