import Analytics from 'analytics-react-native';
import settings from '../settings';

const { segment } = settings;

export default new Analytics(segment);
