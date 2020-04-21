const questions = require('./questions.json');

findAllQuestionsForQuiz = (quizId) => questions.filter(question => question.quizId === quizId);

findAllQuestions = () => questions;

findQuestionById = (questionId) => questions.find(question => question._id === questionId);

module.exports = {
    findAllQuestionsForQuiz,
    findAllQuestions,
    findQuestionById
}
