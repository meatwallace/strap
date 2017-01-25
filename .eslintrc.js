module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: 'airbnb',
  rules: {
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': [ 2, { 'ignore': [ '^[~]' ] }],
    'import/prefer-default-export': 1,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'new-cap': [2, { 'capIsNewExceptions': ['List', 'Map'] }]
  }
}
