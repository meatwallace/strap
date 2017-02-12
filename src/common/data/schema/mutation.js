import userMutations from './models/User/mutations';
import todoMutations from './models/Todo/mutations';

export default function mutation(app) {
  return {
    ...userMutations(app),
    ...todoMutations(app),
  };
}
