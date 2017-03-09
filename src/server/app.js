import feathers from 'feathers';
import configuration from 'feathers-configuration';

// TODO: Load config from server.js instead of default
export default feathers().configure(configuration());
