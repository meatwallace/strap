import { print } from 'graphql';
import rootSchema from './rootSchema.graphql';

export { default as resolvers } from './rootSchema';

export const schema = print(rootSchema);
