import Analytics from 'analytics-react-native';
import setting from '../lib/setting';

const apiKey = setting('segment');
const analytics = new Analytics(apiKey);

export default analytics;
