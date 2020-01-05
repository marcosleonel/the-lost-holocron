const handler = require('./handler');
const options = require('./options');

const randomQuote = {
  path: '/v1/random-quote',
  method: 'GET',
  handler,
  options,
};

module.exports = randomQuote;
