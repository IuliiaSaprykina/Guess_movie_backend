module.exports = {
  development: {
    client: 'pg',
    connection: "postgres:///questions",
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    dialectOptions: {
      "ssl": {"require":true }
    },
    migrations: {
        directory: './migrations',
    },
    seeds: { directory: './data/seeds' },
}
};
