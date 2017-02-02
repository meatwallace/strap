export default function schema(app) {
  const Users = app.service('users');

  return {
    async author(Todo, args, context) {
      const author = await Users.get(Todo.authorId);

      return author;
    },
  };
}
