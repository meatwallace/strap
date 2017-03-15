# strap

[![Greenkeeper badge](https://badges.greenkeeper.io/meatwallace/strap.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/meatwallace/strap.svg?branch=master)](https://travis-ci.org/meatwallace/strap)
[![Test Coverage](https://codeclimate.com/github/meatwallace/strap/badges/coverage.svg)](https://codeclimate.com/github/meatwallace/strap/coverage)
[![Code Climate](https://codeclimate.com/github/meatwallace/strap/badges/gpa.svg)](https://codeclimate.com/github/meatwallace/strap)


## Development
- Create a `.env` file, using `.sample-env` as a template

## Deployment
- Configure [Travis CI](https://travis-ci.org) for your project
- Create an environment variable named `$PROD_ENV` containing all of the relevant public environment variables for your project (found in `.env`). These will be bundled by Webpack during the CI process. It should be formatted as a single line, using `\n` to indicate line breaks, ex: `NODE_ENV=development\nAPP_NAME=strap\nHOST=localhost\nPORT=3030...`
- Using `now add secret`, add all the relevant private environment variables from `now.json`, ex: `now add secret strap_jwt_secret <token>`
