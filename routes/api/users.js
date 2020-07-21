const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../../models/user.model");

router.post("/", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  User.findOne({ email }).then((user) => {
    if (user) {
      res.status(400).json({ msg: "User with this email already exists" });
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          res.json({
            user: {
              id: user.id,
              username: user.username,
              email: user.email,
            },
          });
        });
      });
    });
  });
});

module.exports = router;
