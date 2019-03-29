'use strict'

module.exports = appInfo => {
  const config = exports = {}
  const PORT = 5000
  const BE_PORT = 6000
  config.cluster = {
    listen: {
      port: PORT
    }
  }
  config.keys = appInfo.name + '_1517820149266_5360';
  return config;
};