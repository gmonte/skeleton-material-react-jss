const env = process.env.NODE_ENV || 'development'

console.log('######################env:', env)

module.exports = require(`./${env}`)
