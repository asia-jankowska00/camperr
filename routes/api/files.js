const express = require("express");
const router = express.Router();
const upload = require("../../middleware/upload");

router.get("/:filename", (req, res) => {
  const gfs = req.app.locals.gfs;
  gfs.files
    .find({ filename: req.params.filename })
    .toArray(function (err, file) {
      if (file) {
        const readstream = gfs.createReadStream({
          filename: req.params.filename,
        });
        readstream.pipe(res);
      }

      // const writestream = gfs.createWriteStream(file.filename);
      // gfs.createReadStream(`/images/${file.filename}`).pipe(writestream);
      // console.log(res);
    });
});

router.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});

module.exports = router;
