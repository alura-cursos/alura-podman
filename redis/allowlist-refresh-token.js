const redis = require('redis');
const manipulaLista = require('./manipula-lista');
let config = require(`../config.json`);
const redisPort = process.env.REDIS_PORT || config.redisConfig.port;
const redisHost = process.env.REDIS_HOST || config.redisConfig.host;
const allowlist = redis.createClient(redisPort,redisHost,{ prefix: 'allowlist-refresh-token:' });
module.exports = manipulaLista(allowlist);
