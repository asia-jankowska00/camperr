const express = require("express");
const mongoose = require("mongoose");

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
app.use("/users", require("./routes/api/users.js"));

// MongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
