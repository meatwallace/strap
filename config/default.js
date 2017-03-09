// Feathers development config
module.exports = {
  appName: 'Strap API',
  host: 'localhost',
  port: 3030,
  auth: {
    idField: '_id',
    token: {
      secret: 'Y19Ccdl+lPA1rJdkDvnwdd3gqnIDnZc5LV6B/wnO0tCJ7FFLiAgifvJWHIs29g46feFqXyxYbvaXLpMR+Ih8nw==',
    },
    local: {},
    facebook: {
      clientID: '1054000421370648',
      clientSecret: '8f63a8241fc8580498986a4bffa2dd43',
      permissions: {
        authType: 'rerequest',
        scope: [
          'public_profile',
          'email',
        ],
      },
    },
    google: {
      clientID: '971590645882-vrkicuvn53876opcj0pe3g061mak3cf7.apps.googleusercontent.com',
      clientSecret: '1TYvSICikMYGT4v1hTDyxVUH',
      permissions: {
        scope: ['profile'],
      },
    },
  },
  mongo: {
    servers: [
      'aws-us-east-1-portal.7.dblayer.com:15900',
      'aws-us-east-1-portal.10.dblayer.com:15900',
    ],
    database: 'development',
    user: 'dev_admin',
    pass: 'EU2UFfFdpT5wcaJ4L7Xk4PcW2',
    ssl: true,
  },
};
