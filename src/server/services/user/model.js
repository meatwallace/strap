import { Collection } from 'waterline';

export default Collection.extend({
  identity: 'user',
  schema: true,
  model: 'mongoDb',
  attributes: {
    email: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    createdAt: { type: 'date', defaultsTo: Date.now },
    updatedAt: { type: 'date', defaultsTo: Date.now },
  },
});
