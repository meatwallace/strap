import gql from 'graphql-tag';

export default gql`
  mutation logInWithGoogle($accessToken: String!, $refreshToken: String) {
    logInWithGoogle(accessToken: $accessToken, refreshToken: $refreshToken) {
      accessToken
    }
  }
`;
