export default function genActionType(scope, action) {
  return `${process.env.APP_NAME}/${scope}/${action}`;
}
