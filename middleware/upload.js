const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const crypto = require("crypto");
const path = require("path");

const storage = new GridFsStorage({
  url: process.env.ATLAS_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });
const uploadImage = (req, res, next) => {
  upload.single("image");
  console.log(req.image);
  console.log(req.body.image);
  next();
};
// async (req, res, next) => {
//   const fileInfo = await
//    upload.single("image");
//   //   console.log(req.image);
//   //   req.image = fileInfo;
//   next();
// };

// module.exports = upload;
module.exports = uploadImage;
