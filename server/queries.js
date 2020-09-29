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

const postQuestion = (request, response) => {
    const { added_by_user, q_text, a_correct, a_b, a_c, a_d } = request.body
  
    pool.query('INSERT INTO questions (q_text, a_correct, a_b, a_c, a_d, added_by_user) VALUES ($1, $2, $3, $4, $5);', [q_text, a_correct, a_b, a_c, a_d, added_by_user], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }

  module.exports = {
      getQuestions,
      postQuestion
  }