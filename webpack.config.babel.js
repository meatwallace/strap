/**
 * Dynamically loads webpack config depending on --env flag
 */

function buildConfig(env) {
  /* eslint-disable import/no-dynamic-require, global-require */
  return require(`./webpack/${env}.js`)({ env });
}

module.exports = buildConfig;
