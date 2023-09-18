const bcrypt = require('bcrypt');
const fs = require('fs/promises');


const cadastrarUsuario = async (request, reply) => {
    const { nome, email, senha } = request.body;

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const dados = (await fs.readFile('src/data.json')).toString();

        const arrDados = JSON.parse(dados);

        const usuario = {
            nome,
            email,
            senha: senhaCriptografada
        };

        arrDados.push(usuario);

        const arrDadosString = JSON.stringify(arrDados);

        await fs.writeFile('src/data.json', arrDadosString);

        const { senha: _, ...novoUsuario } = usuario

        return reply.code(201).send({
            mensagem: 'Usuário Cadastrado',
            novoUsuario
        })

    } catch (error) {
        return reply.status(500).json({ mensagem: error.message })
    }
};

const listarUsuarios = async (request, reply) => {
    try {
        const dados = (await fs.readFile('src/data.json')).toString();

        const arrDados = JSON.parse(dados);

        return reply.code(200).send(arrDados)
    } catch (error) {
        return reply.code(500).send({ mensagem: error.message })
    }
}

module.exports = {
    cadastrarUsuario,
    listarUsuarios
}