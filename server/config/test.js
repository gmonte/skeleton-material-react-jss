// console.log('##@@## process.env.DB_POOL_MIN', process.env.DB_POOL_MIN)
// console.log('##@@## process.env.DB_POOL_MAX', process.env.DB_POOL_MAX)

module.exports = {
  env: process.env.NODE_ENV || 'test',
  port: process.env.PORT || 3000,
  database: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST_TEST,
      user: process.env.DB_USER_TEST,
      password: process.env.DB_PASSWORD_TEST,
      database: process.env.DB_SCHEMA_TEST
    },
    pool: {
      min: parseInt(process.env.DB_POOL_MIN),
      max: parseInt(process.env.DB_POOL_MAX)
    }
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
}
