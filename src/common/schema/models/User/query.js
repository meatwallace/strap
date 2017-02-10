export default function queries(app) {
  const Users = app.service('users');
  const Viewer = app.service('viewer');

  return {
    async author(root, { email }, context) {
      const query = { email };
      const users = await Users.find({ query });

      return users[0];
    },
    async authors(root, args, context) {
      const users = await Users.find();

      return users;
    },
    async user(root, args, context) {
      const user = await Viewer.find(context);

      return user;
    },
  };
}
