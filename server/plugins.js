const HapiSwagger = require('hapi-swagger');
const Vision = require('@hapi/vision');
const Inert = require('@hapi/inert');
const routes = require('./routes');


const registerPlugins = async (server) => { // eslint-disable-line
  await server.register([
    Vision,
    Inert,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: 'The Lost Holocron API',
          version: 'v1.0',
        },
      },
    },
  ]);

  server.route([...routes]);
};

module.exports = registerPlugins;
