import authentication from 'feathers-authentication';

export default function auth() {
  const config = this.get('auth');

  this.configure(authentication(config));
}
