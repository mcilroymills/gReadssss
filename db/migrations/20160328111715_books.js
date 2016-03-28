
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table){
    table.increments();
    table.string('title');
    table.text('description');
    table.text('cover');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
