# API REST com Fastify

Este é um exemplo de uma API REST simples construída usando o framework Fastify no Node.js. A API simula um banco de dados armazenando informações de usuário em um arquivo JSON e utiliza a biblioteca bcrypt para criptografar senhas.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado no seu sistema.

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/sua-api-fastify.git
cd sua-api-fastify
```

2.Instale as dependências:
```bash
npm install
```

## Como usar
Após a instalação, você pode iniciar a API executando o seguinte comando:

```bash
npm start
```
Isso iniciará o servidor Fastify na porta 3000 (você pode alterar a porta no arquivo index.js se desejar).

# Rotas da API

## Cadastrar um Usuário

**Rota:** POST /cadastrar

**Descrição:** Cadastra um novo usuário no sistema.

**Corpo da Requisição:** JSON com os campos "nome", "email" e "senha".

**Exemplo de Corpo da Requisição:**

```json
{
  "nome": "Nome do Usuário",
  "email": "usuario@email.com",
  "senha": "senhadousuario"
}
```
**Resposta de Sucesso:** Status code 201 (Created) e um objeto JSON com a mensagem de sucesso e os dados do novo usuário.

```json
{
  "mensagem": "Usuário Cadastrado",
  "novoUsuario": {
    "nome": "Nome do Usuário",
    "email": "usuario@email.com"
  }
}
```

**Resposta de Erro:** Status code 500 (Internal Server Error) e uma mensagem de erro em JSON em caso de falha no cadastro.

## Listar Usuários

**Rota:** GET /listar

**Descrição:** Retorna a lista de todos os usuários cadastrados no sistema.

**Resposta de Sucesso:** Status code 200 (OK) e um array JSON com os dados de todos os usuários.

```json
[
  {
    "nome": "Nome do Usuário 1",
    "email": "usuario1@email.com"
  },
  {
    "nome": "Nome do Usuário 2",
    "email": "usuario2@email.com"
  }
]
```

**Resposta de Erro:** Status code 500 (Internal Server Error) e uma mensagem de erro em JSON em caso de falha na obtenção dos dados.

# Observações

Este é um exemplo didático e não deve ser usado em produção.
Os dados dos usuários são armazenados em um arquivo JSON (data.json) para simular um banco de dados simples. Em um ambiente real, você usaria um banco de dados apropriado.
As senhas dos usuários são criptografadas usando a biblioteca bcrypt para segurança básica. Em uma aplicação real, você deve implementar recursos de segurança mais robustos, como autenticação e autorização adequadas.
Sinta-se à vontade para personalizar e expandir esta API de acordo com suas necessidades.



