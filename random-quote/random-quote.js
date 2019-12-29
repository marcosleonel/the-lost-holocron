const randomHandler = require('./random-quote.handler');
const randomOptions = require('./random-quote.options');

const randomQuote = {
  path: '/v1/random-quote',
  method: 'GET',
  handler: randomHandler,
  options: randomOptions,
};

module.exports = randomQuote;
