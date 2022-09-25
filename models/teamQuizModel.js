const mongoose = require("mongoose");

const teamQuizSchema = mongoose.Schema(
  {
    teamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teams",
    },
    startTime: {
      type: Date,
    },
    endTime: {
      type: Date,
    },
    tabChangeStartTime: {
      type: Date,
    },
    noOfMinutesSpent: {
      type: Date,
    },
    setId: {
      type: Number,
    },
    questionsOrder: [Number],
    presentQuestionIdx: {
      type: Number,
    },
    score: {
      type: Number,
    },
  },
  { collection: "TeamQuizModel" }
);

module.exports = mongoose.model("TeamQuizModel", teamQuizSchema);
