import { AsyncStorage } from 'react-native';
import config from 'react-native-config';
import initApollo from '@common/lib/initApollo';

const host = config.HOST;
const port = config.PORT;

const getToken = () => AsyncStorage.getItem('token');

const apollo = initApollo(host, port, getToken);

export default apollo;