
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('authors').del(),

    // Inserts seed entries
    knex('authors').insert({
        fname:
        lname:
        bio:
        img:
    }),
    knex('authors').insert({
        fname:
        lname:
        bio:
        img:
    }),
    knex('authors').insert({
        fname:
        lname:
        bio:
        img:
    }),
    knex('authors').insert({
        fname:
        lname:
        bio:
        img:
    }),
    knex('authors').insert({
        fname:
        lname:
        bio:
        img:
    })
  );
};
