const redis = require('redis');
let config = require(`../config.json`);
const redisPort = process.env.REDIS_PORT || config.redisConfig.port;
const redisHost = process.env.REDIS_HOST || config.redisConfig.host;
const blocklist = redis.createClient(redisPort,redisHost,{ prefix: 'blocklist-access-token:' });
const manipulaLista = require('./manipula-lista');
const manipulaBlocklist = manipulaLista(blocklist);

const jwt = require('jsonwebtoken');
const { createHash } = require('crypto');

function geraTokenHash(token) {
  return createHash('sha256').update(token).digest('hex');
}

module.exports = {
  async adiciona(token) {
    const dataExpiracao = jwt.decode(token).exp;
    const tokenHash = geraTokenHash(token);
    await manipulaBlocklist.adiciona(tokenHash, '', dataExpiracao);
  },
  async contemToken(token) {
    const tokenHash = geraTokenHash(token);
    return manipulaBlocklist.contemChave(tokenHash);
  },
};
