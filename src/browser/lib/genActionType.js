import setting from '~/lib/setting';

export default function genActionType(scope, action) {
  if (typeof scope !== 'string' || typeof action !== 'string') {
    throw new Error('Func requires 2 string params');
  }

  return `${setting('appName')}/${scope}/${action}`;
}
