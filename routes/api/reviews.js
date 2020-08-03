const express = require("express");
const router = express.Router({ mergeParams: true });
const auth = require("../../middleware/auth");

const Campground = require("../../models/campground.model");
const User = require("../../models/user.model");
const Review = require("../../models/review.model");

router.post("/", auth, async (req, res) => {
  console.log(req.params.id);
  try {
    const campground = await Campground.findById(req.params.id).exec();
    if (!campground) throw Error("This campground doesn't exist");
    else {
      const newReview = new Review({
        text: req.body.text,
        rating: req.body.rating,
        author: {
          id: req.body.author.id,
          username: req.body.author.username,
        },
      });

      newReview.save();
      campground.reviews.push(newReview);
      campground.save();
      res.json(campground);
    }
  } catch (err) {
    res.json({ msg: err.message });
  }
});

module.exports = router;
