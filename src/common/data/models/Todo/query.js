export default function queries(app) {
  const Todos = app.service('todos');

  return {
    async todos(root, args, context) {
      const todos = await Todos.find();

      return todos;
    },
    async todo(root, { _id }, context) {
      const todo = await Todos.get(_id);

      return todo;
    },
  };
}
