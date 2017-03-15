module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  plugins: [
    'prettier',
  ],
  rules: {
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 1,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'no-unused-vars': [2, { args: 'none' }],
    'no-underscore-dangle': [2, { allow: ['_id', '__DEV__', '__mock'] }],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack/universal.babel.js',
      },
    },
  },
}
