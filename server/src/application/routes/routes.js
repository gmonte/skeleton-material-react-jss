const routes = require('express').Router()

const { obterConvite } = require('../routes/convite/get')

routes.get('/convite', obterConvite)

routes.get('/status', (req, res, next) => {
  try {
    res.send({ status: 'ok' })
  } catch (error) {
    next(error)
  }
})

module.exports = routes
