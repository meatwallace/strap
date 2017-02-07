import Config from '@common/lib/config';
import config from '../../../settings';

export default new Config({ ...config.all, ...config.browser });
