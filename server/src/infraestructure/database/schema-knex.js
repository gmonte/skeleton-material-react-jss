require('dotenv').config({ encoding: 'utf8' })
const config = require('../../../config')

console.log('#############', JSON.stringify(config))
const knex = require('knex')(config.database)

module.exports = knex
