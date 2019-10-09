// Update with your config settings.
require('dotenv').config({ encoding: 'utf8' })

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA
    },
    pool: { min: parseInt(process.env.DB_POOL_MIN), max: parseInt(process.env.DB_POOL_MAX) },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/devops/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/devops/knex/seeds/dev'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST_PRD,
      user: process.env.DB_USER_PRD,
      port: process.env.DB_PORT,
      password: process.env.DB_PASSWORD_PRD,
      database: process.env.DB_SCHEMA
    },
    pool: { min: parseInt(process.env.DB_POOL_MIN), max: parseInt(process.env.DB_POOL_MAX) },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/devops/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/devops/knex/seeds/dev'
    }
  }
}
