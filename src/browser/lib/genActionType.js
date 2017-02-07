import config from '../config/config';

export default function genActionType(scope, action) {
  return `${config.get('appName')}/${scope}/${action}`;
}
