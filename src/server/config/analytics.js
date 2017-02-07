import Analytics from 'analytics-react-native';
import config from './config';

const apiKey = config.get('segment');

export default new Analytics(apiKey);
