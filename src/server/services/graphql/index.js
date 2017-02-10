import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { print } from 'graphql-tag/printer';
import { schema, resolvers } from '@common/schema';

const GRAPHQL = '/graphql';
const GRAPHIQL = '/graphiql';

export default function init() {
  const app = this;

  const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolvers(app),
  });

  app.use(GRAPHQL, bodyParser.json(), graphqlExpress((req) => {
    const { token, provider } = req.feathers;
    console.log('GraphQL service hit');
    console.log(req.feathers);

    return {
      schema: executableSchema,
      context: {
        token,
        provider,
      },
    };
  }));

  app.use(GRAPHIQL, graphiqlExpress({ endpointURL: GRAPHQL }));
}
