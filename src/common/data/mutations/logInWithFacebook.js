import gql from 'graphql-tag';

export default gql`
  mutation logInWithFacebook($accessToken: String!, $refreshToken: String) {
    logInWithFacebook(accessToken: $accessToken, refreshToken: $refreshToken) {
      accessToken
    }
  }
`;
