module.exports = {
  development: {
    client: 'pg',
    connection: "postgres:///questions",
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    migrations: {
        directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
}
};
