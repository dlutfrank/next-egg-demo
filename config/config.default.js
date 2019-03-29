'use strict'

module.exports = appInfo => {
  const config = exports = {};
  const PORT = 5000;
  const BE_PORT = 6000;
  config.cluster = {
    listen: {
      port: PORT
    }
  };

  config.keys = appInfo.name + '_1517820149266_5360';

  config.middleware = [
    'httpProxy'
  ];

  config.httpProxy = {
    targets: {
      '/api/(.*)':{
        target: "http://127.0.0.1:3001",
        // changeOrigin: true,
      }
    } 
  };

  return config;
};