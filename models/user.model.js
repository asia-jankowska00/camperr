const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  image: { type: String, default: "084083a3212f4632105ecd145a63e95c.png" },
  imageId: { type: String, default: "5f3a5e6afec4092db44dc64f" },
  description: { type: String },
  joined: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
