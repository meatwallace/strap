import mongoose from 'mongoose';
import auth from './authentication';
import graphql from './graphql';
import user from './user';

export default function services() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(auth);
  app.configure(graphql);
  app.configure(user);
}
