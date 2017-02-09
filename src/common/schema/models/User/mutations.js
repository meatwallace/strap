import axios from 'axios';

export default function mutations(app) {
  const Users = app.service('users');

  return {
    async signUp(root, args, context) {
      const user = await Users.create(args);

      return user;
    },
    async logIn(root, { email, password }, context) {
      const result = await axios.post('/auth/local', { email, password });

      return result;
    },
  };
}
