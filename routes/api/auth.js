const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../../models/user.model");

router.post("/register", (req, res) => {
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
          jwt.sign(
            { _id: user._id },
            config.get("jwtSecret"),
            {
              expiresIn: 3600,
            },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  _id: user._id,
                  username: user.username,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  User.findOne({ email }).then((user) => {
    if (!user) {
      res.status(400).json({ msg: "User does not exist" });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Incorrect password" });

      jwt.sign(
        { _id: user.id },
        config.get("jwtSecret"),
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              _id: user._id,
              isAdmin: user.isAdmin,
              username: user.username,
              email: user.email,
            },
          });
        }
      );
    });
  });
});

module.exports = router;
