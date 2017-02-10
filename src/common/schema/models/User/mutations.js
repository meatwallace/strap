import axios from 'axios';

let config = {};

if (process.env.NODE_ENV === 'development') {
  config = {
    baseUrl: 'http://192.168.1.235',
    proxy: {
      host: '192.168.1.235',
      port: 3030,
    },
  };
}

const instance = axios.create(config);

export default function mutations(app) {
  const Users = app.service('users');

  return {
    async signUp(root, args, context) {
      const user = await Users.create(args);

      return user;
    },
    async logIn(root, { email, password }, context) {
      const result = await instance.post('/auth/local', { email, password });

      return result.data;
    },
  };
}
