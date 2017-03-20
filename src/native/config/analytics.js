import { initialize } from '@common/config/analytics';
import config from 'react-native-config';

const analytics = initialize(config.SEGMENT_KEY);

export default analytics;
