const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/authentication",{
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Successfull Connected to the Database");
});

module.exports = db;

