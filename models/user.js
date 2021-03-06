const mongoose = require("mongoose");
// const multer = require("multer");
const path = require("path");

// const AVATAR_PATH = path.join("uploads/users/avatars");

var userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model("User", userSchema);

module.exports = User;
