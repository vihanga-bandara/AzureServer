nodejs-log
===========

## Very Simple Colorful Console Logging

# Install

```bash
  npm install nodejs-log
```

# Examples:

```js
var Logger = require('../logger.js');

// Show Level warn, error or info
Logger.debugLevel = 'info';

// Result: [info] This is my Message!
Logger.warn('This is my Message!');

// Result: [error] [Test] This is my Message!
Logger.error('This is my Message!', 'Test');

// Result: [info] This is my Message!
Logger.info('This is my Message!');

// Result: [debug] [Test] This is my Message!
Logger.debug('This is my Message!', 'Test');
```

# The MIT License (MIT)


