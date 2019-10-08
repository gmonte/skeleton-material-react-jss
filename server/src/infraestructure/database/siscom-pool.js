const knex = require('knex')

module.exports = knex({
  client: 'oracledb',
  connection: {
    host: 'siscomhml-scan.corp.tvglobo.com.br',
    user: 'esiscom',
    password: 'intsiscom1',
    database: 'JBESCP01'
  },
  pool: { min: 5, max: 30 }
})
