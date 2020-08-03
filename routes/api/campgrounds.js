const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Campground = require("../../models/campground.model");
const User = require("../../models/user.model");

router.get("/", (req, res) => {
  Campground.find()
    .then((campgrounds) => res.json(campgrounds))
    .catch((err) => {
      throw err;
    });
});

router.get("/:id", async (req, res) => {
  try {
    const campground = await Campground.findById(req.params.id)
      .populate("reviews")
      .exec();
    if (!campground) throw Error("This campground doesn't exist");
    res.json(campground);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
});

router.put("/:id", auth, (req, res) => {
  const updatedCamground = {
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
  };

  Campground.findByIdAndUpdate(req.params.id, updatedCamground, { new: true })
    .then((campground) => res.json(campground))
    .catch((err) => {
      throw err;
    });
});

router.post("/", auth, (req, res) => {
  const newCampground = new Campground({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    author: {
      id: req.body.author.id,
      username: req.body.author.username,
    },
  });

  newCampground
    .save()
    .then((newCampground) => res.json(newCampground))
    .catch((err) => {
      throw err;
    });
});

router.delete("/:id", auth, (req, res) => {
  Campground.findByIdAndDelete(req.params.id)
    .then(res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
