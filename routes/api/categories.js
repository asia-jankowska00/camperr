const express = require("express");
const router = express.Router();
const Category = require("../../models/category.model");
const upload = require("../../middleware/upload");

router.get("/", async (req, res) => {
  try {
    const allCategories = await Category.find();
    res.json(allCategories);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.post("/new", upload.single("image"), async (req, res) => {
  try {
    const newCategory = new Category({
      name: req.body.name,
      image: req.file.filename,
    });

    const savedCategory = await newCategory.save();
    if (!savedCategory) throw Error("Failed to save campground");

    res.json(savedCategory);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

module.exports = router;
