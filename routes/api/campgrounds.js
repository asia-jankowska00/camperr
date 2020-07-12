const express = require("express");
const router = express.Router();

const Campground = require("../../models/campground.model");

router.get("/", (req, res) => {
  Campground.find().then((campgrounds) => res.json(campgrounds));
});

router.post("/", (req, res) => {
  const newCampground = new Campground({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
  });
  newCampground.save().then((newCampground) => res.json(newCampground));
});

router.delete("/:id", (req, res) => {
  Campground.findById(req.params.id)
    .then(Campground.deleteOne().then(res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
