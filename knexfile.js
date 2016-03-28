module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/gReadssss',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

  // production: {
  //   client: 'pg',
  //   connection: 'postgres://',
  //   migrations: {
  //     directory: './db/migrations'
  //   },
  //   seeds: {
  //     directory: './db/seeds'
  //   }
  // }
};
