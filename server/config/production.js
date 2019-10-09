module.exports = {
  env: process.env.NODE_ENV || 'production',
  port: process.env.PORT || 3000,
  database: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA
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
