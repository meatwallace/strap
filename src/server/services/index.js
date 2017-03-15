import mongoose from 'mongoose';
import auth from './authentication';
import graphql from './graphql';
import todos from './todos';
import users from './users';
import viewer from './viewer';

export default function services() {
  const app = this;

  mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Mongoose connected to MongoDB');
    }
  });

  mongoose.Promise = global.Promise;

  app.configure(auth);
  app.configure(users);
  app.configure(todos);
  app.configure(viewer);
  app.configure(graphql);
}
