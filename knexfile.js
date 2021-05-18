module.exports = {
  development: {
    client: 'pg',
    connection: "postgres:///questions",
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgresql',
    ssl: true,
    dialectOptions: {
      ssl: { require: true },
    },
    logging: false,
    migrations: {
        directory: './migrations',
    },
    seeds: { directory: './data/seeds' },
}
};
