import gql from 'graphql-tag';

export default gql`
  mutation signUp($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
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
