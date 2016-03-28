
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('genres').del(),

    // Inserts seed entries
    knex('genres').insert({
        name:
    }),
    knex('genres').insert({
        name:
    }),
    knex('genres').insert({
        name:
    }),
    knex('genres').insert({
        name:
    }),
    knex('genres').insert({
        name:
    }),
    knex('genres').insert({
        name:
    }),
    knex('genres').insert({
        name:
    }),
    knex('genres').insert({
        name:
    }),
    knex('genres').insert({
        name:
    }),
    knex('genres').insert({
        name:
    }),
    knex('genres').insert({
        name:
    }),
  );
};
