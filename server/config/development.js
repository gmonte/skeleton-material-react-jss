module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  database: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA
    },
    pool: {
      min: parseInt(process.env.DB_POOL_MIN),
      max: parseInt(process.env.DB_POOL_MAX) 
    }
  }
}
