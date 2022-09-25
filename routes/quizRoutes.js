const express = require("express");
const quizController = require("../controllers/quiz/quizController");
const quizRouter = express.Router();
const auth = require("../middleware/authMiddleware");

quizRouter.route("/quiz/:teamId").get(auth, quizController.getQuestion);
quizRouter.route("/quiz/:teamId").post(auth, quizController.submitAnswer);
// teamRouter.route("/quiz/answers/:teamId").post(auth, teamController.getAnswers);
// teamRouter.route("/quiz/score/:teamId").post(auth, teamController.getScore);

module.exports = quizRouter;
