import mongoose from 'mongoose';
import setting from '~/lib/setting';
import auth from './authentication';
import graphql from './graphql';
import todos from './todos';
import users from './users';
import viewer from './viewer';

export default function services() {
  const app = this;

  const { user, pass, servers, database, ssl } = setting('mongo');

  const serversString = servers.reduce((string, server) => `${string},${server}`);
  const sslVal = ssl ? 'true' : 'false';
  const connection = `mongodb://${user}:${pass}@${serversString}/${database}?ssl=${sslVal}`;

  mongoose.connect(connection, { mongos: true }, (err) => {
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
