import axios from '../../../configs/axios';

export default function mutations(app) {
  const Users = app.service('users');

  return {
    async signUp(root, { email, password }, context) {
      await Users.create({ email, password });
      const result = await axios.post('/authentication', { email, password });

      return result.data;
    },
    async logIn(root, { email, password }, context) {
      const result = await axios.post('/authentication', { email, password });

      return result.data;
    },
    async logInWithToken(root, { accessToken }, context) {
      const result = await axios.post('/authentication', { accessToken });

      return result.data;
    },
    async logInWithGoogle(root, args, context) {
      const { accessToken, refreshToken } = args;

      const result = await axios.post('/authentication', {
        strategy: 'google-token',
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      return result.data;
    },
    async logInWithFacebook(root, args, context) {
      const { accessToken, refreshToken } = args;

      const result = await axios.post('/authentication', {
        strategy: 'facebook-token',
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      return result.data;
    },
  };
}
