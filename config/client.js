// Browser/RN development config
module.exports = {
  graphQLEndpoint: 'http://localhost:3030/graphql', // For Apollo Client
  segment: '', // Segment Analytics API key
  appName: 'Strap',
  // Used for React Native OAuth
  facebook: {
    appId: '1803893939861286',
    callback: 'fb1803893939861286://authorize',
  },
  google: {
    appId: '856839298791-b34dq123a5l2rmnp2vbaudftk8oaqovp.apps.googleusercontent.com',
    callback: 'com.googleusercontent.apps.856839298791-b34dq123a5l2rmnp2vbaudftk8oaqovp:/oauth2redirect',
  },
};
