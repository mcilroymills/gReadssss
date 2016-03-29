
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books_genres', function(table){
    table.integer('book_id').references('id').inTable('books').onDelete('CASCADE');
    table.integer('genre_id').references('id').inTable('genres').onDelete('CASCADE');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books_genres');
};
