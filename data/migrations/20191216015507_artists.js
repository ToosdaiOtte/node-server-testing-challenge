
exports.up = function(knex) {
  return knex.schema.createTable('artists', table => {
      table.increments();
      table.string('name', 100).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('artists');
};
