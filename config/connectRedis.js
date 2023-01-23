const Redis = require("redis");

const RedisClient = Redis.createClient({
 url:process.env.REDIS_URL
});

module.exports = RedisClient;