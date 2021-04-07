const redis = require('redis')
let config = require(`../config.json`);
const redisPort = process.env.REDIS_PORT || config.redisConfig.port;
const redisHost = process.env.REDIS_HOST || config.redisConfig.host;
const conexao = redis.createClient(redisPort,redisHost,{ prefix: 'redefinicao-de-senha' })
const manipulaLista = require('./manipula-lista')
module.exports = manipulaLista(conexao)
