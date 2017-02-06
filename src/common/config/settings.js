import { Platform } from 'react-native';
import isDev from './isDev';

let env;

const dev = isDev ? 'dev' : 'prod';

if (window) {
  env = 'browser';
} else if (global) {
  env = 'server';
} else {
  env = Platform.OS;
}

const allSettings = require(`../../../settings.${dev}.js`);

const settings = {
  ...allSettings.all,
  ...allSettings[env],
};

export default settings;
