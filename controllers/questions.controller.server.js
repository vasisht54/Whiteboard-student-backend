const questionService =  require("../services/questions.service.server");

module.exports = (app) => {
    app.get('/api/quizzes/:qid/questions', (req, res) => {
        const quizId = req.params['qid'];
        const questions = questionService.findAllQuestionsForQuiz(quizId);
        res.json(questions);
    })

    app.get('/api/questions', (req, res) => {
        res.send(questionService.findAllQuestions());
    })

    app.get('/api/questions/:questionId', (req, res) => {
        res.json(questionService.findQuestionById(req.params['questionId']));
    })
}


