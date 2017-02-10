import mutation from './mutation';
import query from './query';
import authSchema from './models/AuthPayload/schema';
import todoSchema from './models/Todo/schema';
import userSchema from './models/User/schema';

export default function schema(app) {
  return {
    Mutation: mutation(app),
    Query: query(app),
    AuthPayload: authSchema(app),
    Todo: todoSchema(app),
    User: userSchema(app),
  };
}
