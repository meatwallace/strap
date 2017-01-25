import { formatName } from '~/utils/string';

export default function greet(name = 'stranger') {
  return `Hey ${formatName(name)}!`;
}
