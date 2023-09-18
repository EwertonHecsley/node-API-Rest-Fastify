const fastify = require('./index');

fastify.register(require('../src/router/router'));

fastify.listen({ port: 3000 }, () => console.log('Servidor Online'));
