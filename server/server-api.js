const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

const db = require('./queries');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

app.get('/questions', db.getQuestions);
app.post('/questions', db.postQuestion);

