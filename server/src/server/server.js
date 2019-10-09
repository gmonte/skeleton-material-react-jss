const express = require('express')
// const compression = require('compression')
// const helmet = require('helmet')
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
// const multer = require('multer')
const { routes } = require('../application/application')

const knex = require('../infraestructure/database/schema-knex')
// const expressPino = require('express-pino-logger')
// const requestId = require('express-request-id')
// const { logger } = require('~inf@logger')
// const cors = require('cors')
// const expressStatsd = require('express-statsd')
// const agendar = require('~dom/etl/jobs/siscom-amap/channel/channel')
// const extract = require('~dom/etl/jobs/siscom-amap/price')
// const nodeSchedule = require('node-schedule')

// const swaggerUi = require('swagger-ui-express')

// const swaggerSpec = require('~inf/swaggers-spec')

// const {
//   sendMessage,
//   producerProgramaStream,
//   consumerCanaisStream,
//   producerCanaisStream,
//   consumerProgramaStream
// } = require('~inf/kafka')
// Leitura das configs do .env
require('dotenv').config({ encoding: 'utf8' })

// Banner da App
const banner = '[ TVGlobo MSA - NodeJS Microservice Chassis]'
require('simple-banner').set(banner, 0, 0)

// Carregando o Express
const app = express()

// Configuração cors
// app.use(cors())

// Swagger specs 'n' ui
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Distributed tracing header X-Request-Id
// app.use(requestId())

// Configuração de Logging
// const expressLogger = expressPino({ logger })
// app.use(expressLogger)

// Log de auditoria, customizar conforme necessário
// app.use((req, res, next) => {
//   // without custom serializers, we must be explicit
//   logger.trace(
//     { req, requestId: req.headers['X-Request-Id'] },
//     'A new request received at ' + Date.now()
//   )
//   next()
// })

// Protegendo o express contra determinados HTTP Headers
// app.use(helmet())

// Compressao das rotas
// app.use(compression())

// Registrando middleware parser de JSON application/json
app.use(bodyParser.json())

// Registrando middleware parser de application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// for parsing multipart/form-data
// app.use(multer({ dest: './uploads/' }).single('upload'))

app.use(express.static('public'))

// Configurando cookieParser
// app.use(cookieParser())

// Configurando pasta de arquivos públicos (imgs, assets, downloads, etc)
app.use('/public', express.static('public'))

// Rotas
app.use('/', routes)

// Middleware de error handler, deve criar os handlers necessários para aplicação.
// app.use(function(err, req, res, next) {
//   logger.error(err)
//   res.status(500)
//   res.send('Oops, algo inesperado ocorreu!')
// })

// Para prevenir erros em testes
if (require.main === module) {
  const migConfig = {
    tableName: 'knex_migrations',
    directory: `${ __dirname }../../../devops/knex/migrations`
  }

  knex.migrate
    .latest(migConfig)
    .then((result) => {
      console.log('Migrations OK...', result, process.env.NODE_ENV)
      app.listen(process.env.PORT, (req, res) => {
        console.log('Listening on port', process.env.PORT, process.env.NODE_ENV)
      })
    })
    .catch((result) => {
      console.log('Migrations ERROR...')
      console.log(result)
    })

} else {
  module.exports = app
}
