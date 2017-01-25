import ApolloClient from 'apollo-client';

const client = new ApolloClient({
  reduxRootSelector(state) { return state.get('apollo'); },
});

export default client;
