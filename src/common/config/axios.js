import axios from 'axios';
import settings from '../settings';

const { host, port } = settings;

const axiosConfig = process.env.NODE_ENV !== 'development' ? {} : {
  baseUrl: `http://${host}:${port}`,
  proxy: {
    host,
    port,
  },
};

const instance = axios.create(axiosConfig);

export default instance;
