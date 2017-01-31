const user = 'dev_admin';
const pass = 'EU2UFfFdpT5wcaJ4L7Xk4PcW2';
const database = 'development';
const servers = [
  'aws-us-east-1-portal.7.dblayer.com:15900',
  'aws-us-east-1-portal.10.dblayer.com:15900',
].reduce((string, server) => `${string},${server}`);

const connectionString = `mongodb://${user}:${pass}@${servers}/${database}?ssl=true`;

module.exports = {
  mongodb: connectionString,
  auth: {
    token: {
      secret: 'Y19Ccdl+lPA1rJdkDvnwdd3gqnIDnZc5LV6B/wnO0tCJ7FFLiAgifvJWHIs29g46feFqXyxYbvaXLpMR+Ih8nw==',
    },
    local: {},
  },
};
