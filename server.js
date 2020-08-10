const express = require("express");
const mongoose = require("mongoose");

const Grid = require("gridfs-stream");

// Configuration
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes
app.use("/campgrounds", require("./routes/api/campgrounds.js"));
app.use("/campgrounds/:id/reviews", require("./routes/api/reviews.js"));
app.use("/users", require("./routes/api/users.js"));
app.use("/auth", require("./routes/api/auth.js"));
app.use("/files", require("./routes/api/files.js"));

// MongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// https://mongoosejs.com/docs/deprecations.html#findandmodify
// mongoose.set("useFindAndModify", false);

let gfs;

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established");
  gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection("uploads");
  app.locals.gfs = gfs;
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
