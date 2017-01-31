export default function resolvers(app) {
  const Todos = app.service('todos');
  const Users = app.service('users');
  const Viewer = app.service('viewer');

  return {
    User: {
      todos(user, args, context) {
        return Todos.find({
          query: {
            authorId: user._id,
          },
        });
      },
    },
    Todo: {
      author(Todo, args, context) {
        return Users.get(Todo.authorId);
      },
    },
    AuthPayload: {
      data(auth, args, context) {
        return auth.data;
      },
    },
    Query: {
      viewer(root, args, context) {
        return Viewer.find(context);
      },
      author(root, { username }, context) {
        return Users.find({
          query: {
            username,
          },
        }).then(users => users[0]);
      },
      authors(root, args, context) {
        return Users.find({});
      },
      todos(root, { category }, context) {
        return Todos.find({
          query: {
            category,
          },
        });
      },
      todo(root, { _id }, context) {
        return Todos.get(_id);
      },
    },
    Mutation: {
      signUp(root, args, context) {
        return Users.create(args);
      },
      logIn(root, { username, password }, context) {
        return app.authenticate({
          password,
          email: username,
          type: 'local',
        });
      },
      createTodo(root, args, context) {
        return Users.create(args, context);
      },
      removeTodo(root, { _id }, context) {
        return Todos.remove(_id, context);
      },
    },
  };
}
