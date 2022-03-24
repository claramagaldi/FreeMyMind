const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const session = require("express-session");
//const passport = require("passport");
//const passportLocalMongoose = require("passport-local-mongoose"); //hash and salt passwords and save users into mongoDB Database
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
// const findOrCreate = require("mongoose-findorcreate");
const cors = require("cors");
const path = require("path");

////// EXPRESS //////

const app = express();
require("dotenv").config({ path: "./config.env" });

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

app.use(express.static(path.join(__dirname, "client", "build")));
//app.use(express.static(path.join(__dirname, "client", "public")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
// app.use(require("./routes/userR"));
// app.use(
//   session({
//     secret: "mySecret",
//     resave: true, // resave cookies even if nothing changed
//     saveUninitialized: true,
//   })
// );

// Init passport authentication
// app.use(passport.initialize());
// Persistent login sessions
// app.use(passport.session());

////// DATABASE //////

// Getting driver connection
const dbo = require("./db/conn");
// Connecting
dbo.connectToServer();

////// MODELS //////

////// STRATEGIES //////

// require("./models/userM");
// const User = mongoose.model("User");

// //Local Strategy
// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

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

////// ROUTES //////

////// CONTROLLERS //////

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

////// START //////
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
