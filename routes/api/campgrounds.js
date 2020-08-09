const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const isAdmin = require("../../middleware/isAdmin");
const matchUser = require("../../middleware/matchUser");
const calcRating = require("../../middleware/calcRating");
const uploadImage = require("../../middleware/upload");

const NodeGeocoder = require("node-geocoder");
const options = {
  provider: "google",
  httpAdapter: "https",
  apiKey: process.env.GEO_CODE_API,
  formatter: null,
};
const geocoder = NodeGeocoder(options);

const Campground = require("../../models/campground.model");
const User = require("../../models/user.model");

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
      .exec();
    if (!campground) throw Error("This campground doesn't exist");
    res.json(campground);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
});

router.post("/", auth, uploadImage, async (req, res) => {
  const gfs = req.app.locals.gfs;
  console.log(req.body.image);
  // console.log(gfs.files.find({ filename: "myImage.png" }));
  // gfs.files.findById({ filename: req.params.filename }, (err, file) => {
  //   // Check if file
  //   if (!file || file.length === 0) {
  //     return res.status(404).json({
  //       err: "No file exists",
  //     });
  //   }
  //   // File exists
  //   return res.json(file);
  // });

  const newCampground = new Campground({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    location: req.body.location,
    author: {
      id: req.body.author.id,
      username: req.body.author.username,
    },
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

router.delete("/:id", auth, isAdmin, matchUser, (req, res) => {
  Campground.findByIdAndDelete(req.params.id)
    .then(res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

router.put("/:id", auth, isAdmin, matchUser, async (req, res) => {
  const updatedCamground = {
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    location: req.body.location,
  };

  try {
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
});

module.exports = router;
