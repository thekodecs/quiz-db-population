const Pool = require('pg').Pool;
const env = require('dotenv').config();
const pool = new Pool({
  user: process.env.dev_psql_user,
  host: ('localhost'),
  database: 'thekodecs',
  password: process.env.dev_psql_pwd,
  port: 5432,
});

const getQuestions = (request, response) => {
    console.log(`USERNAME: ${process.env.dev_psql_user} PWD ${process.env.dev_psql_pwd}`);
    pool.query(`SELECT * FROM questions`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const putQuestion = (request, response) => {
    const { q_text, a_correct, a_b, a_c, a_d } = request.body
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }

  module.exports = {
      getQuestions
  }