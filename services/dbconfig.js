const { Pool } = require('pg');


const pool = new Pool({
  user: 'obinna',
  host: 'localhost',
  database: 'capstonedb2',
  password: '39ugwuodo',
  port: 5432,
});


module.exports = pool;
