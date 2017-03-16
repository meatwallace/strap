import gql from 'graphql-tag';

export default gql`
  mutation logInWithToken($token: String!) {
    logInWithToken(token: $token) {
      accessToken
    }
  }
`;
