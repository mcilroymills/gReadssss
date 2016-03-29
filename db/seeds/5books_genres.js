
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('books_genres').del(),

    // Inserts seed entries
    knex('books_genres').insert({
        book_id: 1,
        genre_id: 14
    }),
    knex('books_genres').insert({
        book_id: 2,
        genre_id: 14
    }),
    knex('books_genres').insert({
        book_id: 3,
        genre_id: 16
    }),
    knex('books_genres').insert({
        book_id: 4,
        genre_id: 2
    }),
    knex('books_genres').insert({
        book_id: 5,
        genre_id: 2
    }),
    knex('books_genres').insert({
        book_id: 6,
        genre_id: 7
    })
  );
};


