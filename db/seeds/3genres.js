
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('genres').del(),

    // Inserts seed entries
    knex('genres').insert({
        name: 'Art'
    }),
    knex('genres').insert({
        name: 'Biography'
    }),
    knex('genres').insert({
        name: 'Business'
    }),
    knex('genres').insert({
        name: 'Children\'s'
    }),
    knex('genres').insert({
        name: 'Christian'
    }),
    knex('genres').insert({
        name: 'Classics'
    }),
    knex('genres').insert({
        name: 'Comics'
    }),
    knex('genres').insert({
        name: 'Contemporary'
    }),
    knex('genres').insert({
        name: 'Cookbooks'
    }),
    knex('genres').insert({
        name: 'Crime'
    }),
    knex('genres').insert({
        name: 'Fantasy'
    }),
    knex('genres').insert({
        name: 'Fiction'
    }),
    knex('genres').insert({
        name: 'Graphic Novels'
    }),
    knex('genres').insert({
        name: 'Historical Fiction'
    }),
    knex('genres').insert({
        name: 'History'
    }),
    knex('genres').insert({
        name: 'Horror'
    }),
    knex('genres').insert({
        name: 'Humor And Comedy'
    }),
    knex('genres').insert({
        name: 'Manga'
    }),
    knex('genres').insert({
        name: 'Memoir'
    }),
    knex('genres').insert({
        name: 'Music'
    }),
    knex('genres').insert({
        name: 'Mystery'
    }),
    knex('genres').insert({
        name: 'Non Fiction'
    }),
    knex('genres').insert({
        name: 'Paranormal'
    }),
    knex('genres').insert({
        name: 'Philosophy'
    }),
    knex('genres').insert({
        name: 'Poetry'
    }),
    knex('genres').insert({
        name: 'Psychology'
    }),
    knex('genres').insert({
        name: 'Religion'
    }),
    knex('genres').insert({
        name: 'Romance'
    }),
    knex('genres').insert({
        name: 'Science'
    }),
    knex('genres').insert({
        name: 'Science Fiction'
    }),
    knex('genres').insert({
        name: 'Self Help'
    }),
    knex('genres').insert({
        name: 'Suspense'
    }),
    knex('genres').insert({
        name: 'Spirituality'
    }),
    knex('genres').insert({
        name: 'Sports'
    }),
    knex('genres').insert({
        name: 'Thriller'
    }),
    knex('genres').insert({
        name: 'Travel'
    }),
    knex('genres').insert({
        name: 'Young Adult'
    })
  );
};
