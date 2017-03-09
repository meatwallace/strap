import axios from '../../../config/axios';

export default function mutations(app) {
  const Users = app.service('users');

  return {
    async signUp(root, { email, password }, context) {
      await Users.create({ email, password });
      const result = await axios.post('/auth/local', { email, password });

      return result.data;
    },
    async logIn(root, { email, password }, context) {
      const result = await axios.post('/auth/local', { email, password });

      return result.data;
    },
    async logInWithToken(root, { token }, context) {
      const result = await axios.post('/auth/token', { token });

      return result.data;
    },
    async logInWithGoogle(root, args, context) {
      const { accessToken, email, firstName, googleId, lastName, refreshToken } = args;
      // Look for a user by email
      const existingUser = await Users.find({ query: { email } });

      const userData = { email, firstName, googleId, lastName };

      // If we have an existing user
      if (existingUser.total > 0) {
        // TODO: Better merging logic dependant on if we have a previous account or not
        // already mapped to our googleId. i.e. email registration, then login via google -
        // how do we handle that? Need to apply it to our Facebook login, too
        const user = existingUser.data[0];

        await user.update(userData);

      // We have no existing user
      } else {
        // Create a user
        await Users.create(userData);
      }

      // Authenticate with our token
      const result = await axios.post('/auth/google', {
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      return result.data;
    },
    async logInWithFacebook(root, { accessToken, email, facebookId, refreshToken }, context) {
      // Look for a user by email
      const existingUser = await Users.find({ query: { email } });

      // If we have an existing user
      if (existingUser.total > 0) {
        const user = existingUser.data[0];

        await user.update({ email, facebookId });

      // We have no existing user
      } else {
        // Create a user
        await Users.create({ email, facebookId });
      }

      // Authenticate with our token
      const result = await axios.post('/auth/facebook', {
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      return result.data;
    },
  };
}
