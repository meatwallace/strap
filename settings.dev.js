const USER = 'dev_admin';
const PASS = 'EU2UFfFdpT5wcaJ4L7Xk4PcW2';
const connectionString = '@aws-us-east-1-portal.7.dblayer.com:15900,aws-us-east-1-portal.10.dblayer.com:15900/development?ssl=true';

module.exports = {
  mongodb: `mongodb://${USER}:${PASS}@${connectionString}`,
  auth: {
    token: {
      secret: 'Y19Ccdl+lPA1rJdkDvnwdd3gqnIDnZc5LV6B/wnO0tCJ7FFLiAgifvJWHIs29g46feFqXyxYbvaXLpMR+Ih8nw==',
    },
    local: {},
  },
};
