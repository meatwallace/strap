import gql from 'graphql-tag';

export default gql`
  mutation logInWithFacebook(
    $accessToken: String!
    $email: String
    $facebookId: String!
    $firstName: String
    $lastName: String
    $refreshToken: String
  ) {
    logInWithFacebook(
      accessToken: $accessToken
      email: $email
      facebookId: $facebookId
      firstName: $firstName
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
