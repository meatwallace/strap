import gql from 'graphql-tag';

export default gql`
  query currentUser {
    currentUser {
      _id
      firstName
      lastName
      email
      facebookId
      googleId
      createdAt
    }
  }
`;
