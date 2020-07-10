const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
  name: String,
  image: String,
  description: String,
});

const Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;
