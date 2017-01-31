import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import { print } from 'graphql-tag/printer';
// import Resolvers from  './resolvers';
import schema from '~/data/schema.graphql';
// import { before, after } from './hooks';


export default function initService() {
  const app = this;

  const executableSchema = makeExecutableSchema({
    typeDefs: [print(schema)],
    // resolvers: Resolvers.call(app),
  });

  // Initialize our service with any options it requires
  app.use('/graphql', apolloExpress((req) => {
    const { token, provider } = req.feathers;

    return {
      schema: executableSchema,
      context: {
        token,
        provider,
      },
    };
  }));

  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }));
}
