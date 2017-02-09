import gql from 'graphql-tag';

export default gql`
  mutation signUp($username: String!, $password: String!) {
    signUp(username: $username, password: $password) {
      _id,
      username,
    }
  }
`;
