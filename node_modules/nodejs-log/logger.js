var colors = require('colors');

function Logger() {
}

Logger.debugLevel = 'info';

Logger.log = function (level, message, namespace) {
  var levels = ['error', 'warn', 'info', 'debug'];
  if (levels.indexOf(level) <= levels.indexOf(Logger.debugLevel) ) {
    if (typeof message !== 'string')
      message = JSON.stringify(message);

    if (typeof namespace !== 'undefined')
      message = ('['+namespace+'] ').green+message;

    if (level == 'error')
      level = level.red;
    else if (level == 'warn')
      level = level.yellow;
    else if (level == 'info')
      level = level.green;
    else if (level == 'debug')
      level = level.blue;

    console.log(level+':\t'+message);
  }
}

Logger.error = function (message, namespace) {
  Logger.log('error', message, namespace);
}

Logger.warn = function (message, namespace) {
  Logger.log('warn', message, namespace);
}

Logger.info = function (message, namespace) {
  Logger.log('info', message, namespace);
}

Logger.debug = function (message, namespace) {
  Logger.log('debug', message, namespace);
}

module.exports = Logger;