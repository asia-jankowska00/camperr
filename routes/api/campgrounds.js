const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const auth = require("../../middleware/auth");
const isAdmin = require("../../middleware/isAdmin");
const matchUser = require("../../middleware/matchUser");
const calcRating = require("../../middleware/calcRating");
const upload = require("../../middleware/upload");

const NodeGeocoder = require("node-geocoder");
const options = {
  provider: "google",
  httpAdapter: "https",
  apiKey: process.env.GEO_CODE_API,
  formatter: null,
};
const geocoder = NodeGeocoder(options);

const Campground = require("../../models/campground.model");
const Review = require("../../models/review.model");

router.get("/", (req, res) => {
  Campground.find()
    .then((campgrounds) => res.json(campgrounds))
    .catch((err) => {
      throw err;
    });
});

router.get("/cotd", async (req, res) => {
  try {
    const campground = await Campground.findOne()
      .sort("-ratingAverage")
      .populate("reviews")
      .exec();
    if (!campground) throw Error("This campground doesn't exist");
    res.json(campground);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
});

router.get("/:id", calcRating, async (req, res) => {
  try {
    const campground = await Campground.findById(req.params.id)
      .populate("reviews")
      .populate("author")
      .exec();

    if (!campground) throw Error("This campground doesn't exist");

    res.json(campground);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.params.userId);

    const campgrounds = await Campground.find({
      "author.id": userId,
    });

    if (!campgrounds) throw Error("This user doesnt have any campgrounds");

    res.json(campgrounds);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
});

router.get("/category/:categoryId", async (req, res) => {
  try {
    const campgrounds = await Campground.find({
      categories: { $in: [req.params.categoryId] },
    });

    if (!campgrounds) throw Error("This user doesnt have any campgrounds");

    res.json(campgrounds);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
});

router.put(
  "/:id",
  auth,
  upload.single("image"),
  isAdmin,
  matchUser,
  async (req, res) => {
    try {
      const updatedCamground = {
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        image: req.body.image,
        imageId: req.body.imageId,
        categories: JSON.parse(req.body.categories),
      };

      if (req.file) {
        updatedCamground.image = req.file.filename;
        updatedCamground.imageId = req.file.id;
      }

      const geocodedData = await geocoder.geocode(req.body.location);

      if (!geocodedData) throw Error("Invalid location");

      updatedCamground.lat = geocodedData[0].latitude;
      updatedCamground.lng = geocodedData[0].longitude;
      updatedCamground.location = geocodedData[0].formattedAddress;

      const campground = await Campground.findByIdAndUpdate(
        req.params.id,
        updatedCamground,
        { new: true }
      );

      res.json(campground);
    } catch (err) {
      res.json({ msg: err.message });
    }
  }
);

router.post("/", auth, upload.single("image"), async (req, res) => {
  // console.log(req.file);
  const newCampground = new Campground({
    name: req.body.name,
    image: req.file.filename,
    imageId: req.file.id,
    description: req.body.description,
    location: req.body.location,
    author: JSON.parse(req.body.author),
    categories: JSON.parse(req.body.categories),
  });

  try {
    const geocodedData = await geocoder.geocode(req.body.location);

    if (!geocodedData) throw Error("Invalid location");

    newCampground.lat = geocodedData[0].latitude;
    newCampground.lng = geocodedData[0].longitude;
    newCampground.location = geocodedData[0].formattedAddress;

    try {
      const savedCampground = await newCampground.save();
      if (!savedCampground) throw Error("Failed to save campground");

      res.json(savedCampground);
    } catch (err) {
      res.json({ msg: err.message });
    }
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.delete("/:id", auth, isAdmin, matchUser, async (req, res) => {
  try {
    const campground = await Campground.findById(req.params.id);

    const reviews = await Review.find({
      _id: { $in: campground.reviews },
    }).deleteMany();

    const gfs = req.app.locals.gfs;

    const imageId = new mongoose.Types.ObjectId(campground.imageId);

    gfs.delete(imageId, function (err) {
      if (err) console.log(err);
    });

    campground.deleteOne();
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(404).json({ success: false });
  }
});

module.exports = router;
