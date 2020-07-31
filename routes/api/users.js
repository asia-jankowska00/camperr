const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const User = require("../../models/user.model");

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = router;
