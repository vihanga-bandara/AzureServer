var Logger = require('../logger.js');

Logger.debugLevel = 'info';

Logger.warn('Du sollst tolle sachen machen!!1');
Logger.error('Du sollst tolle sachen machen!!2', 'Test');
Logger.info('Du sollst tolle sachen machen!!3');
Logger.debug('Du sollst tolle sachen machen!!3', 'Test');