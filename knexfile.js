module.exports = {
  development: {
    client: 'pg',
    connection: "postgres:///questions",
  },
  production: {
    client: 'postgresql',
    database: {
      type: "postgres",
      host: "ec2-34-206-8-52.compute-1.amazonaws.com",
      port: 5432,
      username: "yhzjtxcbiyvycy",
      password:
        "8558519dadee5d3c3a0dea94db0108dcbdec286ed1b46571b4c42c6698241641",
      database: "d5tie78s3pvvq8",
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    },
    // connection: process.env.DATABASE_URL,
    // ssl: { 
    //   require: true,
    //   rejectUnauthorized: false 
    // },
    migrations: {
        directory: './migrations',
    },
    seeds: { directory: './data/seeds' },
}
};
