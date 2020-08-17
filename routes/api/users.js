const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const upload = require("../../middleware/upload");

const User = require("../../models/user.model");

router.get("/user", auth, (req, res) => {
  User.findById(req.user._id)
    .select("-password")
    .then((user) => res.json(user));
});

router.get("/user/:userId", (req, res) => {
  User.findById(req.params.userId)
    .select("-password")
    .then((user) => res.json(user));
});

router.put("/user/:userId", upload.single("image"), async (req, res) => {
  try {
    const updatedUser = {
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      imageId: req.body.imageId,
    };

    if (req.file) {
      updatedUser.image = req.file.filename;
      updatedUser.imageId = req.file.id;
    }

    const user = await User.findByIdAndUpdate(req.params.userId, updatedUser, {
      new: true,
    });

    User.findById(req.params.userId)
      .select("-password")
      .then((user) => res.json(user));
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.post("/user/:userId", upload.single("image"), async (req, res) => {
  try {
    const avatar = {
      image: req.file.filename,
      imageId: req.file.id,
    };

    const user = await User.findByIdAndUpdate(req.params.userId, avatar, {
      new: true,
    });

    User.findById(req.params.userId)
      .select("-password")
      .then((user) => res.json(user));
  } catch (err) {
    res.json({ msg: err.message });
  }
});

module.exports = router;
