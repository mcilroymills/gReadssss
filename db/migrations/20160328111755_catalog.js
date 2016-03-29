
exports.up = function(knex, Promise) {
  return knex.schema.createTable('catalog', function(table){
    table.integer('book_id').references('id').inTable('books').onDelete('CASCADE');
    table.integer('author_id').references('id').inTable('authors').onDelete('CASCADE');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('catalog');
};
