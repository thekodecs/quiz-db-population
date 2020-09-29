const express = require('express');
const cors = require('cors');
const path = require('path');
app = express();
const port = 3001;
app.use(express.static(' styles'));
app.use(cors());

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port);