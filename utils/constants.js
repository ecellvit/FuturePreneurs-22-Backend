const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const loginType = {
  GOOGLE_LOGIN: 0,
  BASIC_LOGIN: 1,
};

const teamRole = {
  LEADER: 0,
  MEMBER: 1,
  ADMIN: 2,
};

const requestStatusTypes = {
  PENDING_APPROVAL: 0,
  APPROVED: 1,
  REJECTED: 2,
  ADDED_TO_OTHER_TEAM: 3,
  REQUEST_TAKEN_BACK: 4,
  LEFT_TEAM: 5,
  REMOVED_FROM_TEAM: 6,
  JOINED_VIA_TOKEN: 7,
  TEAM_DELETED: 8,
};

const approvalStatusTypes = {
  REJECTED: 0,
  APPROVED: 1,
};

const quizStatusTypes = {
  NOT_STARTED: 0,
  STARTED: 1,
};

const errorCodes = {
  UNKNOWN_ERROR: 0,
  EXCEPTION: 1,
  INPUT_PARAMS_INVALID: 2,
  INVALID_TOKEN: 3,
  USER_NAME_EXIXTS: 4,
  INVALID_USERNAME_OR_PASSWORD: 5,
  INVALID_URL: 6,
  TEAM_NAME_EXISTS: 7,
  USER_ALREADY_IN_TEAM: 8, //user in other team
  USER_HAS_PENDING_REQUESTS: 9, //user shouldnot have pending requests to create team
  INVALID_TEAM_ID: 10,
  INVALID_USERID_FOR_TEAMID: 11, //userId not related to given team id
  USER_IS_LEADER: 12,
  INVALID_USERID_FOR_TEAMID_OR_USER_NOT_LEADER: 13, // //userId not related to given team id or user ia leader
  TEAMSIZE_MORE_THAN_ONE: 14,
  REQUEST_ALREADY_SENT: 15,
  NO_PENDING_REQUESTS: 16,
  INVALID_USERID: 17,
  TEAM_IS_FULL: 18,
  INVALID_TEAM_TOKEN: 19,
  MAX_QUESTIONS_REACHED: 20,
  TIME_LIMIT_REACHED: 21,
  NOT_ADMIN: 22,
  INVALID_QUESTION_ID: 23,
  NOT_STARTED_QUIZ: 24,
  PENDING_REQUESTS_LIMIT_REACHED: 25,
  SAME_EXISTING_TEAMNAME: 26,
  UPDATE_TEAMNAME_LIMIT_EXCEEDED: 27,
  INVALID_OPERATION: 28,
  TEAM_NOT_QUALIFIED: 29,
  ROUND_ONE_NOT_STARTED: 30, //round one not started
  ROUND_ONE_COMPLETED: 31, //round one completed
  ROUND_TWO_COMPLETED: 32,
  ROUND_THREE_COMPLETED: 33, //round three completed
  BALANCE_EXCEEDED: 34,
  ITEMS_LIMIT_REACHED: 35,
  PREVIOUS_ROUNDS_NOT_DONE: 36,
  ROUND_ONE_NOT_COMPLETED: 37, // round one not completed
  ROUND_THREE_NOT_STARTED: 38, //round three not started
  ROUND_TWO_NOT_STARTED: 39,
};

const questionTypes = {
  SINGLE_CORRECT: 0,
  MULTI_CORRECT: 1,
  MATCH_THE_FOLLOWING: 2,
  CASE_STUDY_SINGLE: 3,
  CASE_STUDY_MULTI: 4,
  DESCRIPTIVE: 5,
  IMAGE_QUESTION: 6,
};

const maps = {
  TEMPLE: 0,
  BEACH: 1,
  TECHPARK: 2,
  HOSPITAL: 3,
  SCHOOL: 4,
  NONE: 5,
};

const roundThreeAmount = [7000, 8000, 6000];
// const SESConfig = {
//   apiVersion: "2010-12-01",
//   accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SES_SECRET_KEY,
//   region: process.env.AWS_SES_REGION,
// };

const objectIdLength = 24;
const noOfQuestionsToAnswer = 41;
const noOfSets = 3;

const roundTwoScores = [
  [3, 8, 9, 10, 4, 6, 7, 5],
  [7, 8, 6, 3, 4, 10, 9, 5],
  [3, 8, 9, 6, 10, 7, 5, 4],
];
const roundThreeOperations = {
  ADD: 0,
  DELETE: 1,
};
module.exports = {
  loginType,
  teamRole,
  requestStatusTypes,
  approvalStatusTypes,
  errorCodes,
  objectIdLength,
  noOfQuestionsToAnswer,
  questionTypes,
  quizStatusTypes,
  noOfSets,
  maps,
  roundTwoScores,
  roundThreeAmount,
  roundThreeOperations,
  // SESConfig,
};
