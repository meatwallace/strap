import { APP_NAME } from '~/configs/app';

export default function genActionType(scope, action) {
  if (typeof scope !== 'string' || typeof action !== 'string') {
    throw new Error('Func requires 2 string params');
  }

  return `${APP_NAME}/${scope}/${action}`;
}
