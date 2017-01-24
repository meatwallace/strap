import formatName from './formatName';

export default function greet(name = 'stranger') {
  return `Hey ${formatName(name)}!`;
}
