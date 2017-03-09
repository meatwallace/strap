import settings from '../settings';

const { appName } = settings;

export default function genActionType(scope, action) {
  return `${appName}/${scope}/${action}`;
}
