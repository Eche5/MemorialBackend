const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide your username"],
    minlength: 2,
    maxlength: 100,
  },
  relationship: {
    type: String,
  },
  tribute: {
    type: String,
    required: [true, "please write a tribute"],
    minlength: 2,
    maxlength: 40000,
  },
  date: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
