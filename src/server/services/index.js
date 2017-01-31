import mongoAdapater from 'sails-mongo';
import ORM from './configs/orm';
import auth from './authentication';
import graphql from './graphql';
import user from './user';
import viewer from './viewer';

export default function services() {
  const app = this;

  const config = {
    adapters: {
      default: mongoAdapater,
      mongo: mongoAdapater,
    },
    connections: {
      mongoDb: {
        adapter: 'mongo',
        ssl: true,
        sslValidate: false,
        url: app.get('mongodb'),
      },
    },
    defaults: {
      migrate: 'alter',
    },
  };

  ORM.initialize(config, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Waterline connected to MongoDB');
    }
  });

  app.configure(auth);
  app.configure(user);
  app.configure(viewer);
  app.configure(graphql);
}
