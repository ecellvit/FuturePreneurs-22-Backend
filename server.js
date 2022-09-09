const mongoose = require("mongoose");
const app = require("./app");

// require("dotenv").config();

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
console.log(path.resolve(__dirname, "./.env"));

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DataBase");
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Server Up and Running on port ${PORT}...`));
