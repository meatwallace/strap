import mongoose from 'mongoose';
import auth from './authentication';
import graphql from './graphql';
import todos from './todos';
import users from './users';
import viewer from './viewer';

export default function services() {
  const app = this;

  const { user, pass, servers, database, ssl } = app.get('mongo');
  let serversString;

  if (Array.isArray(servers)) {
    serversString = servers.reduce((string, server) => `${string},${server}`);
  } else {
    serversString = servers;
  }

  const sslVal = ssl ? 'true' : 'false';
  const connection = `mongodb://${user}:${pass}@${serversString}/${database}?ssl=${sslVal}`;

  mongoose.connect(connection, { mongos: Array.isArray(servers) }, (err) => {
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
