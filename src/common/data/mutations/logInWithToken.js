import gql from 'graphql-tag';

export default gql`
  mutation logInWithToken($token: String!) {
    logInWithToken(token: $token) {
      token
      data {
        _id
        email
        facebookId
        googleId
      }
    }
  }
`;
