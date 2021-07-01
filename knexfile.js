// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres:///questions",
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: "pg",
    connectionString: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
    dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
    }
  }

};