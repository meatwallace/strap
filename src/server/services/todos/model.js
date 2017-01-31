import { Collection } from 'waterline';

export default Collection.extend({
  identity: 'todo',
  schema: true,
  connection: 'mongoDb',
  attributes: {
    author: { model: 'user' },
    content: { type: 'string', required: true },
    createdAt: { type: 'date', defaultsTo: Date.now },
    updatedAt: { type: 'date', defaultsTo: Date.now },
  },
});
