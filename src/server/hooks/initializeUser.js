/* eslint-disable no-param-reassign */
export default function() {
  return (hook) => {
    hook.data.roles = ['user'];
    hook.data.permissions = [`users:*:${hook.data._id}`]

    return Promise.resolve(hook);
  }
}
