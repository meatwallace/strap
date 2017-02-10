import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import App from '../components/App';

const userQuery = gql`
  query {
    currentUser {
      _id
      email
    }
  }
`;

const AppWithData = graphql(userQuery, { options: { forceFetch: true } })(App);

export default AppWithData;
