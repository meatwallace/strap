import mutation from './mutation';
import query from './query';

export default function schema(app) {
  return {
    Mutation: mutation(app),
    Query: query(app),
  };
}
