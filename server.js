const express = require('express');
const app = express();

app.use(function(req, res, next) {
    const allowedOrigins = ['https://vasisht-client-angular.herokuapp.com', 'http://localhost:4200', 'http://127.0.0.1:9000', 'http://localhost:9000'];
    const origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

require('./controllers/quizzes.controller.server')(app);
require('./controllers/questions.controller.server')(app);

app.get('/', (req, res) => res.send("Hello there!"));

app.listen(3000, () => {
    console.log('Server is listening on port: 3000');
});
