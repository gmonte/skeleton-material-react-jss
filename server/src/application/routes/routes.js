const routes = require('express').Router()


const { obterConvite } = require('../routes/convite/get')

// const { loggerRequest } = require('../../infraestructure/logger')
// const { consultar } = require('./preco/get')
// const siscomdb = require('../../infraestructure/database/siscom-pool')
// const { Transform } = require('stream')
// const fs = require('fs')
// // const { PrecoETL } = require('./amap')
// // const logger = require('../../infraestructure/logger')
// // var stream = require('stream')
// // const _ = require('highland')
// // const arquivo = fs.createWriteStream('./output' + Date.now)

// const queryPreco = `select 'C-' || pgm.oi_canal || '-P-' || prg.oi_programa || '-P-' || prg.oi_programa || '-L-' ||  snl.oi_sinal || '-F-78' as external_id ,p.nu_preco30, P.nu_preco15--, p.*
// from vpreprc0 p
// JOIN tescprg1 prg
//   on prg.oi_programa = p.oi_programa
// join tescpgm0 pgm
//   on pgm.me_prog = prg.me_programa
//   join tescsnl0 snl on snl.si_local_exibicao = p.me_merc2
// `

routes.get('/convite', obterConvite)

// const toJson = new Transform({
//   objectMode: true,
//   transform(chunk, encoding, next) {
//     this.push(JSON.stringify(chunk))
//     next()
//   }
// })

// ETL Example for price
// routes.get('/amap/preco-etl', ({ res }) => {
//   siscomdb
//     // extract
//     .raw(queryPreco)
//     .stream({ highWaterMark: 256 * 1024 })
//     // transform
//     .pipe(toJson)
//     // load
//     .pipe(res)
// })

routes.get('/status', (req, res, next) => {
  try {
    res.send({ status: 'ok' })
  } catch (error) {
    next(error)
  }
})

// routes.get('/error', (req, res, next) => {
//   try {
//     throw new Error('Tratamento de Erros')
//   } catch (error) {
//     next(error)
//   }
// })

// routes.get('/log', (req, res, next) => {
//   try {
//     const logger = loggerRequest(req)
//     logger.warn('Usando Logging pattern')
//     res.sendStatus(200)
//   } catch (error) {
//     next(error)
//   }
// })

// routes.get('/preco', consultar)

module.exports = routes
