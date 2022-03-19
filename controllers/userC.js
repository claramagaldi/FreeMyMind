const mongoose = require("mongoose");
const User = require("../server");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose"); //hash and salt passwords and save users into mongoDB Database
const session = require("express-session");

// exports.auth = function (req, res) {
//   console.log("req.body.username: " + req.body.username);
//   console.log("req.body.password: " + req.body.password);
//   User.register({username: req.body.username}, req.body.password, function(err, user) {
//     if (err) throw err;
//     passport.authenticate("local")(request, result, function(){
//       console.log("result: " + res.json(result));
//     })
//   })
// };

// exports.auth = function (req, res) {
//   const user = new User({
//     username: req.body.username,
//     password: req.body.password,
//   });
//   req.login(user, function (err) {
//     if (err) throw err;
//     passport.authenticate("local");
//     res.redirect("/");
//   });
// };

// exports.googleAuth = function (req, res) {
//   passport.authenticate("google", { scope: ["profile", "email"] });
// };

// exports.facebookAuth = function (req, res) {
//   passport.authenticate("facebook", { scope: ["email"] });
// };

// exports.googleLogin = function (req, res) {
//   passport.authenticate("google", { failureRedirect: "/login" }),
//   function (req, res) {
//     // Successful authentication, redirect to home.
//     res.redirect("/");
//   }
// };

// exports.facebookLogin = function (req, res) {
//   passport.authenticate("facebook", { failureRedirect: "/login" }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     res.redirect("/");
//   }
// };

// exports.logout = function (req, res) {
//   req.logout();
//   res.redirect("/");
// };
