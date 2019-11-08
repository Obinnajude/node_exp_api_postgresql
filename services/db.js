const Pg = require('pg').Pool;

const config = {
  user: 'obinna',
  database: 'capstonedb2',
  host: 'localhost',
  password: '39ugwuodo',
  port: 5432
};

const pool = new Pg(config);

pool.on('connect', () => {
  // eslint-disable-next-line no-console
  console.log('connected to the Database');
});

const createTables = () => {
  const usersTable = `CREATE TABLE IF NOT EXISTS
        users(
          userId SERIAL PRIMARY KEY,
          first_name VARCHAR(128) NOT NULL,
          last_name VARCHAR(128) NOT NULL,
          email VARCHAR(128) NOT NULL UNIQUE,
          password VARCHAR(128) NOT NULL,
          gender VARCHAR(128) NOT NULL,
          job_role VARCHAR(128) NOT NULL,
          department VARCHAR(128) NOT NULL,
          address VARCHAR(128) NOT NULL,
          token  VARCHAR(255)
        )`;
  // const articleTable = `CREATE TABLE IF NOT EXISTS
  //     articletb(
  //       article_id SERIAL PRIMARY KEY,
  //       article_title VARCHAR(255) NOT NULL,
  //       article_body VARCHAR(80000) NOT NULL,
  //       date_created VARCHAR(120) NOT NULL,
  //       date_modified VARCHAR(120),
  //       userid VARCHAR(20)
  //     )`;
  // const gifsTable = `CREATE TABLE IF NOT EXISTS
  // gifstb(
  //   gifId SERIAL PRIMARY KEY,
  //   title VARCHAR(255) NOT NULL,
  //   imageUrl VARCHAR(455) NOT NULL,
  //   createdOn VARCHAR(120) NOT NULL,
  //   userId VARCHAR(20)
  // )`;

  // const commentTable = `CREATE TABLE IF NOT EXISTS
  //     commenttb(
  //       commentId integer NOT NULL,
  //       comment VARCHAR(500) NOT NULL,
  //       createdOn VARCHAR(120) NOT NULL
  //     )`;

  // const commentTable = `CREATE TABLE IF NOT EXISTS
  // gifcommenttb(
  //   commentId integer NOT NULL,
  //   comment VARCHAR(500) NOT NULL,
  //   createdOn VARCHAR(120) NOT NULL
  // )`;
  pool.query(usersTable)
    .then((res) => {
      // eslint-disable-next-line no-console
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      pool.end();
    });
};

pool.on('remove', () => {
  // eslint-disable-next-line no-console
  console.log('client removed');
  process.exit(0);
});


// export pool and createTables to be accessible  from an where within the application
module.exports = {
  createTables,
  pool,
};

require('make-runnable');
