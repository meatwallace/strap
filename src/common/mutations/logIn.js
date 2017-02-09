import gql from 'graphql-tag';

export default gql`
  mutation logIn($username: String!, $password: String!) {
    logIn(username: $username, password: $password) {
      token,
      data,
    }
  }
`;
