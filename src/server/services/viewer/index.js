import { before, after } from './hooks';

const ENDPOINT = '/viewer';

const service = () => ({
  find(params) {
    return Promise.resolve(params.user);
  },
});

export default function init() {
  const app = this;

  app.use(ENDPOINT, service());

  const viewerService = app.service(ENDPOINT);

  viewerService.before(before);
  viewerService.after(after);
}
