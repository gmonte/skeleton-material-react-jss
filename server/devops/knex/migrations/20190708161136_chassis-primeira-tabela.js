exports.up = function(knex, Promise) {
  return knex.schema.createTable('sidecar_eventos', function(table) {
    table.increments('id').primary()
    table.string('nome', 255).notNullable()
    table.string('inclusao_usuario', 255).notNullable()
    table.datetime('inclusao_data').notNullable()
    table.string('alteracao_usuario', 255)
    table.datetime('alteracao_data')
    table.string('registro_versao', 255).notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sidecar_eventos')
}
