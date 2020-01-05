const Boom = require('@hapi/boom');
const Data = require('../data/quotes');
const logger = require('../logger/logger');

const randomHanlder = () => {
  function getRandomInt(min, max) {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
  }

  try {
    const master = Data[getRandomInt(0, Data.length)];
    const quote = master.quote[getRandomInt(0, master.quote.length)];
    return {
      quote,
      master: master.master,
    };
  } catch (error) {
    logger.error(`[random-quote.handler] Error handling the request: ${error.stack}`);
    Boom.badRequest('Internal Error');
  }
};

module.exports = randomHanlder;
