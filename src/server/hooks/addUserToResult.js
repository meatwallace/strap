/* eslint-disable no-param-reassign */
export default function() {
  return (hook) => {
    hook.result.user = hook.params.user;

    return Promise.resolve(hook);
  }
};
