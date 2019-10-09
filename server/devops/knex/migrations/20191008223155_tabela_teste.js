exports.up = function(knex, Promise) {
    return knex.schema.createTable('teste', function(table) {
      table.increments('id').primary()
      table.string('nome', 255).notNullable()
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('teste')
  }
  