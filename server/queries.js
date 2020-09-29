const Pool = require('pg').Pool;
const env = require('dotenv').config();
const pool = new Pool({
  user: process.env.dev_psql_user,
  host: ('http://185.65.202.37/' || 'localhost'),
  database: 'thekodecs',
  password: process.env.dev_psql_pwd,
  port: 5432,
});

const getUsers = (request, response) => {
    console.log(`USERNAME: ${process.env.dev_psql_user} PWD ${process.env.dev_psql_pwd}`);
    pool.query(`SELECT * FROM questions ORDER BY id ASC`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
      getUsers
  }