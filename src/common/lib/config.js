import { get as getFrom } from 'lodash';

class Config {
  config;

  constructor(config = {}) {
    this.config = config;
  }

  load = (newConfig, merge) => {
    if (merge) {
      this.config = { ...this.config, ...newConfig };
    } else {
      this.config = { ...newConfig };
    }

    return this.config;
  }

  get = key => getFrom(this.config, `${key}`)
}

export default Config;
