module.exports = {
  development: {
    client: 'pg',
    connection: "postgres:///questions",
  },
  production: {
    client: 'pg',
    database: {
      type: "postgres",
      host: "ec2-54-144-251-233.compute-1.amazonaws.com",
      port: 5432,
      username: "lbwurefnkbrljn",
      password:
        "69dd2250428ae01b98c5b686e623b60d280aa7df2d76d6ad470dabe99f06df5d",
      database: "dfej562bjbag0j",
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
