const express = require('express');
const app = express();

const quizzesController = require('./controllers/quizzes.controller.server');
quizzesController(app);

app.get('/', (req, res) => res.send("Hello there!"));

app.listen(3000, () => {
    console.log('Server is listening on port: 3000');
});
