const express = require('express');
const app = express();

require('./controllers/quizzes.controller.server')(app);
require('./controllers/questions.controller.server')(app);

app.get('/', (req, res) => res.send("Hello there!"));

app.listen(3000, () => {
    console.log('Server is listening on port: 3000');
});
