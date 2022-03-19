const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose"); //hash and salt passwords and save users into mongoDB Database
//const GoogleStrategy = require("passport-google-oauth20").Strategy;
//const FacebookStrategy = require("passport-facebook").Strategy;
//const findOrCreate = require("mongoose-findorcreate");
const cors = require("cors");
const path = require("path");

// INITIAL CONFIGURATIONS

const app = express();
require("dotenv").config({ path: "./config.env" });

app.use(express.static(path.join(__dirname, "client", "public")));
//app.use(express.static(path.join(__dirname, "client", "build")))
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(express.json());
app.use(require("./routes/noteR"));
app.use(require("./routes/itemR"));
app.use(require("./routes/postR"));
app.use(require("./routes/userR"));
app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

// DATABASE
// Getting driver connection
const dbo = require("./db/conn");
// Connecting
dbo.connectToServer();

//SCHEMA
// const userSchema = new mongoose.Schema({
//   username: {
//     // values: email address, googleId, facebookId
//     type: String,
//     unique: true,
//     required: [true, "Username is required."],
//   },
//   password: {
//     type: String,
//   },
//   provider: {
//     // values: 'local', 'google', 'facebook'
//     type: String,
//   },
//   email: {
//     type: String,
//   },
// });

const userSchema = require("./models/userM")

userSchema.plugin(passportLocalMongoose); // REGISTERED
//userSchema.plugin(findOrCreate); // GOOGLE & FACEBOOK

const User = new mongoose.model("User", userSchema);

//STRATEGIES

//Registered Strategy
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// //Google Strategy
// passport.use(
//   new GoogleStrategy(
//     {
//       // GOOGLE
//       clientID: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//       callbackURL: "http://localhost:3000/login/google/",
//       userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       console.log(profile);
//       User.findOrCreate(
//         { username: profile.id },
//         {
//           provider: "google",
//           email: profile._json.email,
//         },
//         function (err, user) {
//           return cb(err, user);
//         }
//       );
//     }
//   )
// );

// //Facebook Strategy
// passport.use(
//   new FacebookStrategy(
//     {
//       // FACEBOOK
//       clientID: process.env.FACEBOOK_ID,
//       clientSecret: process.env.FACEBOOK_SECRET,
//       callbackURL: "http://localhost:3000/login/facebook/",
//       profileFields: ["id", "email"],
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       User.findOrCreate(
//         { username: profile.id },
//         {
//           provider: "facebook",
//           email: profile._json.email,
//         },
//         function (err, user) {
//           return cb(err, user);
//         }
//       );
//     }
//   )
// );

app.post("/register", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  console.log("username BE: " + username);
  console.log("password BE: " + password);
  User.register({ username: username }, password, function (err, user) {
    if (err) {
      console.log(err);
      res.redirect("/register");
    } //throw err;
    passport.authenticate("local")(req, res, function () {
      console.log("result: " + res);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
