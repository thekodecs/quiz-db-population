const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.psql_user,
  host: 'localhost',
  database: 'api',
  password: process.env.psql_pwd,
  port: 5432,
});