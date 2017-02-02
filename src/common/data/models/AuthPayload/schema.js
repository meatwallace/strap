export default function schema(app) {
  return {
    data(auth, args, context) {
      return auth.data;
    },
  };
}
