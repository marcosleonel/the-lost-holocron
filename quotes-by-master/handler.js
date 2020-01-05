const Boom = require('@hapi/boom');
const Data = require('../data/quotes');
const logger = require('../logger/logger');

const quotesByMasterHandler = (request) => {
  try {
    if (request.payload) {
      const { master } = request.payload;
      const quotesByMaster = Data.filter(quotes => quotes.master === master);
      return quotesByMaster;
    }
    return 'The name of the master is required';
  } catch (error) {
    logger.error(`[quotes-by-master.handler] Error handling the request: ${error.stack}`);
    Boom.badData('There is a problem with our data');
  }
};

module.exports = quotesByMasterHandler;
