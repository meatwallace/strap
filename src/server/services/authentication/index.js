import authentication from 'feathers-authentication';
import setting from '~/lib/setting';

export default function auth() {
  const app = this;

  const config = {
    ...setting('auth'),
    local: {
      usernameField: 'username',
    },
  };

  app.configure(authentication(config));
}
