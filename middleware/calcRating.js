const Campground = require("../models/campground.model");

async function calcRating(req, res, next) {
  try {
    const campground = await Campground.findById(req.params.id)
      .populate("reviews")
      .exec();

    const allReviews = campground.reviews;

    if (allReviews && allReviews.length) {
      // console.log("All reviews - ", allReviews);
      //throw Error("There are no ratings");

      const allRatings = allReviews
        .filter((review) => review.rating)
        .map((review) => review.rating);

      const ratingAverage =
        allRatings.reduce((a, b) => a + b, 0) / allRatings.length;

      campground.ratingAverage = Math.round(ratingAverage);
      campground.save();
    }
    next();
  } catch (err) {
    res.json({ msg: err.message });
  }
}

module.exports = calcRating;
