import authentication from 'feathers-authentication';
import config from '../../config/config';

export default function auth() {
  const app = this;

  const authConfig = {
    ...config.get('auth'),
    local: {
      usernameField: 'username',
    },
  };

  app.configure(authentication(authConfig));
}
