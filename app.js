const express = require("express");

const bodyParser = require("body-parser");

const passport = require("passport");

const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");

// init app
const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB config
const db = "mongodb://localhost:27017/authApp";
//connect to mongoDb
mongoose
  .connect(db)
  .then(() => console.log("mongo connected"))
  .catch(err => console.log(err));

// routes
const users = require("./routes/authUser");
app.use("/users", users);

// passeport middleware
app.use(passport.initialize);
//require("./models/User");
//passeport config
//require("/config/passeport")(passport);
// protected routes
const key = require("./config/key");

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
