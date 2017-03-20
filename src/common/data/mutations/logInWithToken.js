import gql from 'graphql-tag';

export default gql`
  mutation logInWithToken($token: String!) {
    logInWithToken(token: $token) {
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
