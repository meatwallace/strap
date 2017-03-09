import rootMutation from './rootMutation';
import rootQuery from './rootQuery';

import authSchema from './AuthPayload/schema';
import userSchema from './User/schema';

// We pass in our Feathers app so we can use our service methods
export default function schema(app) {
  return {
    Mutation: rootMutation(app),
    Query: rootQuery(app),

    // Custom types
    AuthPayload: authSchema(app),
    User: userSchema(app),
  };
}
