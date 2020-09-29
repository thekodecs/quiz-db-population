const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.psql_user,
  host: 'localhost',
  database: 'thekodecs',
  password: process.env.psql_pwd,
  port: 5432,
});

const getUsers = (request, response) => {
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