module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': [2, { 'ignore': [ '^[~]', '^[#]'] }],
    'import/prefer-default-export': 1,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'global-require': 0,
    'new-cap': [2, { 'capIsNewExceptions': ['List', 'Map'] }],
    'no-unused-vars': [2, { args: 'none' }],
    'no-underscore-dangle': [2, { allow: ['_id'] }],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack/universal.babel.js',
      },
    },
  },
}
