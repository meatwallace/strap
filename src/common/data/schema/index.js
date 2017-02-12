import { print } from 'graphql-tag/printer';
import rootSchema from './schema.graphql';

export { default as resolvers } from './schema';

export const schema = print(rootSchema);
