const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  cost: Number,
  location: String,
  lat: Number,
  lng: Number,
  ratingAverage: Number,
  createdAt: { type: Date, default: Date.now },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    username: String,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;
