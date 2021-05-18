module.exports = {
  development: {
    client: 'pg',
    connection: "postgres:///questions",
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    ssl: { 
      require: true,
      rejectUnauthorized: false 
    },
    migrations: {
        directory: './migrations',
    },
    seeds: { directory: './data/seeds' },
}
};
