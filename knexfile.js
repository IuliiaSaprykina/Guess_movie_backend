module.exports = {
  development: {
    client: 'pg',
    connection: "postgres:///questions",
  },
  production: {
    client: 'pg',
    connection: "postgres:///questions",
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  }
};
