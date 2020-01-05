const handler = require('./handler');
const options = require('./options');

const quotesByMaster = {
  path: '/v1/quotes-by-master',
  method: 'POST',
  handler,
  options,
};

module.exports = quotesByMaster;
