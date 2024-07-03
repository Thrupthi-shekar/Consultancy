const { alias } = require('module-alias');
const configOverrides = require('./config-overrides.cjs').override;
const override = configOverrides.default;

module.exports = {
  webpack: function(config, env) {
    // Add your webpack config overrides here
    return config;
  },
  jest: function(config) {
    // Add your jest config overrides here
    return config;
  },
  devServer: function(configFunction) {
    // Add your devServer config overrides here
    return configFunction;
  },
  paths: function(paths) {
    // Add your path overrides here
    return paths;
  },
};

