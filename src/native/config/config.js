import Config from '@common/lib/config';
import { Platform } from 'react-native';

const config = require('../../../settings');

export default new Config({ ...config.all, ...config[Platform.OS] });
