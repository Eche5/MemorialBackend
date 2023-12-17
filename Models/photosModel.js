const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  imageURl: {
    type: String,
  },
});

const Photos = mongoose.model("Photos", photoSchema);

module.exports = Photos;
