import { AsyncStorage } from 'react-native';

export default async function() {
  return AsyncStorage.getItem('token');
}