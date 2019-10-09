const knex = require('../database/schema-knex')

const obterConvite = async (id) => {
  let results

  await knex
    .raw(
      `
    select *
      from teste
      where id > ?
  `,
      [0]
    )
    .then((dbResults) => {
      // console.log('Resultado query (quantidade de registros): ', dbResults[0].length)
      results = dbResults[0]
      // console.timeEnd('listPrecos (query aurora)')
    })
    .catch((error) => {
      console.log('Erro na query de consulta de preços')
      console.log(error)
      // console.timeEnd('listPrecos (query aurora)')
    })

  console.log(results)

  return results
}
module.exports = { obterConvite }
