/* eslint-disable global-require, import/no-dynamic-require */

/**
 * Dynamically loads webpack config depending on --env flag
 */
function buildConfig(env) {
  return require(`./webpack/${env}.js`)({ env });
}

module.exports = buildConfig;
