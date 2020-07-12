const express = require("express");
const mongoose = require("mongoose");

// Configuration
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

// Routes
const campgroundsRoute = require("./routes/api/campgrounds.js");
app.use("/campgrounds", campgroundsRoute);

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
