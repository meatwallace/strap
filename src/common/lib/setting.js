import { get } from 'lodash';
import settings from '../config/settings';

export default function setting(key) {
  return get(settings, `${key}`);
}
