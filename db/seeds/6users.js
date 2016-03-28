var bcrypt = require("bcrypt");

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    knex('users').insert(
      {
        fname: 'Mills',
        email: 'millsmcilroy@gmail.com',
        password: bcrypt.hashSync('test', 10),
        admin: true
      }),
    knex('users').insert(
      {
        fname: 'Valerie',
        email: 'valeriekraucunas@gmail.com',
        password: bcrypt.hashSync('test', 10),
        admin: true
      }),
    knex('users').insert(
      {
        fname: 'Jacob',
        email: 'fake1@faker.com',
        password: bcrypt.hashSync('test', 10),
        admin: false
      }),
    knex('users').insert(
      {
        fname: 'Carol',
        email: 'fake2@faker.com',
        password: bcrypt.hashSync('test', 10),
        admin: false
      }),
    knex('users').insert(
      {
        fname: 'Louis',
        email: 'loop@netscape.net',
        password: bcrypt.hashSync('test', 10),
        admin: false
      })
  );
};

