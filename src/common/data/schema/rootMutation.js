import userMutations from './User/mutations';

export default function rootMutation(app) {
  return {
    ...userMutations(app),
  };
}
