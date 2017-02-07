export default function mutations(app) {
  const Todos = app.service('todos');

  return {
    async createTodo(root, args, context) {
      const todo = await Todos.create(args, context);

      return todo;
    },
    async removeTodo(root, { _id }, context) {
      const todo = await Todos.remove(_id, context);

      return todo;
    },
  };
}
