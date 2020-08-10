const express = require("express");
const router = express.Router();

// const multer = require("multer");
// const GridFsStorage = require("multer-gridfs-storage");
// const crypto = require("crypto");
// const path = require("path");

// const storage = new GridFsStorage({
//   url: process.env.ATLAS_URI,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString("hex") + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: "uploads",
//         };
//         resolve(fileInfo);
//       });
//     });
//   },
// });

// const upload = multer({ storage });

router.get("/:filename", (req, res) => {
  const gfs = req.app.locals.gfs;
  gfs.files
    .find({ filename: req.params.filename })
    .toArray(function (err, file) {
      // if (err) ...
      console.log(file);
      // campground.image = `/images/${file.filename}`;

      const readstream = gfs.createReadStream({
        filename: req.params.filename,
      });
      readstream.pipe(res);

      // const writestream = gfs.createWriteStream(file.filename);
      // gfs.createReadStream(`/images/${file.filename}`).pipe(writestream);
      // console.log(res);
    });
});

// router.post("/upload", upload.single("file"), (req, res) => {
//   res.json({ file: req.file });
// });

module.exports = router;
