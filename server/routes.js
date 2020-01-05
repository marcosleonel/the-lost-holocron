const quotesByMaster = require('../quotes-by-master/route');
const randomQuote = require('../random-quote/route');

const routes = [
  quotesByMaster,
  randomQuote,
];

module.exports = routes;
