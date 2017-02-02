export default function schema(app) {
  const Todos = app.service('todos');

  return {
    async todos(user, args, context) {
      const query = { authorId: user._id };
      const todos = await Todos.find({ query });

      return todos;
    },
  };
}
