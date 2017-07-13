const electronConfig = require('./webpack.electron.config');
const serverConfig = require('./webpack.server.config');

module.exports = [
  electronConfig[0],
  electronConfig[1],
  serverConfig[0],
  serverConfig[1]
];
