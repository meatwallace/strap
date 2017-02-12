import { compose, graphql } from 'react-apollo';
import { withRouter } from 'react-router-native';
import { user } from '@common/data/queries';
import App from '../components/App';

const AppWithData = compose(
  graphql(user, { options: { forceFetch: true } }),
  withRouter,
)(App);

export default AppWithData;
