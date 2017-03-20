import Analytics from 'analytics-react-native';

// Bind all methods to class' this scope
export default class extends Analytics {
  constructor(key, opts) {
    super(key, opts);

    this.enqueue = this.enqueue.bind(this);
    this.identify = this.identify.bind(this);
    this.track = this.track.bind(this);
    this.screen = this.screen.bind(this);
    this.page = this.page.bind(this);
    this.group = this.group.bind(this);
    this.alias = this.alias.bind(this);
  }
}