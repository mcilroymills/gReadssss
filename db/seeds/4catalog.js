
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('catalog').del(),

    // Inserts seed entries
    knex('catalog').insert({
        book_id:
        author_id:
    }),
    knex('catalog').insert({
        book_id:
        author_id:
    }),
    knex('catalog').insert({
        book_id:
        author_id:
    }),
    knex('catalog').insert({
        book_id:
        author_id:
    }),
    knex('catalog').insert({
        book_id:
        author_id:
    }),
    knex('catalog').insert({
        book_id:
        author_id:
    }),
    knex('catalog').insert({
        book_id:
        author_id:
    }),
    knex('catalog').insert({
        book_id:
        author_id:
    })
  );
};
