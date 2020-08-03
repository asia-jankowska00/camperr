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

      campground.reviews.push(newReview);
      campground.save();
      newReview.save().then((newReview) => res.json(newReview));
    }
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.delete("/:reviewId", auth, async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.reviewId).exec();
    if (!review) throw Error("This review doesn't exist");

    const campground = await Campground.findById(
      req.params.campgroundId
    ).exec();
    if (!campground) throw Error("This campground doesn't exist");

    campground.reviews.pull(req.params.reviewId);
    campground.save();

    res.json(campground);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.put("/:reviewId", auth, async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.reviewId,
      req.body,
      { new: true }
    ).exec();

    if (!review) throw Error("This review doesn't exist");
    else {
      res.json(review);
    }
  } catch (err) {
    res.json({ msg: err.message });
  }
});

module.exports = router;
