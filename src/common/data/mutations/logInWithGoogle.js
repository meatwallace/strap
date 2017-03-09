import gql from 'graphql-tag';

export default gql`
  mutation logInWithGoogle(
    $accessToken: String!
    $email: String
    $firstName: String
    $googleId: String!
    $lastName: String
    $refreshToken: String
  ) {
    logInWithGoogle(
      accessToken: $accessToken
      email: $email
      firstName: $firstName
      googleId: $googleId
      lastName: $lastName
      refreshToken: $refreshToken
    ) {
      token
      data {
        id
        email
        facebookId
        googleId
      }
    }
  }
`;
