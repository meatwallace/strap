import gql from 'graphql-tag';

export default gql`
  mutation logInWithGoogle($accessToken: String!, $refreshToken: String) {
    logInWithGoogle(accessToken: $accessToken, refreshToken: $refreshToken) {
      accessToken
      user {
        _id
        firstName
        lastName
        email
        facebookId
        googleId
        createdAt
      }
    }
  }
`;
