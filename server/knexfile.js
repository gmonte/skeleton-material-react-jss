/**
 * Connection with Middleware Database
 * @author Giuseppe Matheus
 * @category Infrastructure
 * @see http://knexjs.org/#Installation-client
 */
const connectionKnex = {
  development: {
    client: 'mysql',
    connection: {
      database: 'chassisdb',
      user: 'chassis_app',
      password: 'chassis123',
      port: 5432
    },
    pool: {
      min: 8,
      max: 64
    }
  }
}

module.exports = { connectionKnex }
