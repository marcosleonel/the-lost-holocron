const Hapi = require('@hapi/hapi');
const Path = require('path');

const server = Hapi.server({
  port: 3030,
  host: 'localhost',
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'public'),
    },
    cors: {
      credentials: false,
      origin: ['*'],
      headers: [
        'Access-Control-Allow-Origin',
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization',
        'If-None-Match',
      ],
      additionalHeaders: [
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Headers',
        'Origin',
        'X-Requested-With',
        'Cache-Control',
      ],
      additionalExposedHeaders: [
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Headers',
        'Origin',
        'X-Requested-With',
        'Cache-Control',
      ],
    },
  },
});

module.exports = server;
