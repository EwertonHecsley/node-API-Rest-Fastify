const fastify = require('../index');
const { cadastrarUsuario, listarUsuarios } = require('../controller/controllerFastify');

module.exports = function (fastify, opts, done) {

    fastify.post('/usuario', cadastrarUsuario);
    fastify.get('/usuario', listarUsuarios)

    done();
} 
