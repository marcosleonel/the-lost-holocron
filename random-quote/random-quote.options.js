const randomOptions = {
  description: 'The Force will choose the right message',
  tags: ['api', 'random', 'quote'],
  cors: {
    origin: ['*'],
    headers: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'If-None-Match'],
    additionalHeaders: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Origin', 'X-Requested-With', 'Cache-Control'],
    additionalExposedHeaders: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Origin', 'X-Requested-With', 'Cache-Control'],
  },
};

module.exports = randomOptions;
