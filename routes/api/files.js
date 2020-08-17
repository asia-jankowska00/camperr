const express = require("express");
const router = express.Router();
const upload = require("../../middleware/upload");
const fs = require("fs");

router.get("/:filename", (req, res) => {
  const gfs = req.app.locals.gfs;

  gfs
    .openDownloadStreamByName(req.params.filename)
    .pipe(res)
    .on("error", function (error) {
      // console.log(error);
    })
    .on("finish", function () {
      // console.log("done!");
    });

  // gfs.files
  //   .find({ filename: req.params.filename })
  //   .toArray(function (err, file) {
  //     if (file) {
  //       const readstream = gfs.createReadStream({
  //         filename: req.params.filename,
  //       });
  //       readstream.pipe(res);
  //     }
});

router.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});

module.exports = router;
