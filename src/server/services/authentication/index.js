import authentication from 'feathers-authentication';

export default function auth() {
  const app = this;

  const config = {
    ...app.get('auth'),
    local: {
      usernameField: 'username',
    },
  };

  app.configure(authentication(config));
}
