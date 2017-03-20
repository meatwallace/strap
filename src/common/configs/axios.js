import axios from 'axios';

const host = process.env.HOST;
const port = process.env.PORT;

const axiosConfig = process.env.NODE_ENV !== 'development' ? {} : {
  baseUrl: `http://${host}:${port}`,
  proxy: {
    host,
    port,
  },
};

const instance = axios.create(axiosConfig);

export default instance;
