const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  image: { type: String, default: "2e21c9f398e66bbc7a0cfd79b612b66a.png" },
  imageId: { type: String, default: "5f4130e2e5d8fc32cc82b0ab" },
  description: { type: String },
  joined: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
