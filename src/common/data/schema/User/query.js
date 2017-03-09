export default function queries(app) {
  const Users = app.service('users');
  const Viewer = app.service('viewer');

  return {
    async user(root, { email }, context) {
      const query = { email };
      const users = await Users.find({ query });

      return users[0];
    },
    async users(root, args, context) {
      const users = await Users.find();

      return users;
    },
    async currentUser(root, args, context) {
      const user = await Viewer.find(context);

      return user;
    },
  };
}
