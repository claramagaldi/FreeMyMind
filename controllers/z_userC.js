// const mongoose = require("mongoose");
// const User = require("../models/userM");
// const passport = require("passport");

// exports.register = function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;
//   console.log("username BE: " + username);
//   console.log("password BE: " + password);
//   User.register({ username: username }, password, function (err, user) {
//     if (err) {
//       console.log(err);
//       res.redirect("/register");
//     } else {
//       passport.authenticate("local")(req, res, function () {
//         console.log("result: " + res);
//       });
//     }
//   });
// };

// // exports.auth = function (req, res) {
// //   const user = new User({
// //     username: req.body.username,
// //     password: req.body.password,
// //   });
// //   req.login(user, function (err) {
// //     if (err) throw err;
// //     passport.authenticate("local");
// //     res.redirect("/");
// //   });
// // };

// // exports.googleAuth = function (req, res) {
// //   passport.authenticate("google", { scope: ["profile", "email"] });
// // };

// // exports.facebookAuth = function (req, res) {
// //   passport.authenticate("facebook", { scope: ["email"] });
// // };

// // exports.googleLogin = function (req, res) {
// //   passport.authenticate("google", { failureRedirect: "/login" }),
// //   function (req, res) {
// //     // Successful authentication, redirect to home.
// //     res.redirect("/");
// //   }
// // };

// // exports.facebookLogin = function (req, res) {
// //   passport.authenticate("facebook", { failureRedirect: "/login" }),
// //   function (req, res) {
// //     // Successful authentication, redirect home.
// //     res.redirect("/");
// //   }
// // };

// // exports.logout = function (req, res) {
// //   req.logout();
// //   res.redirect("/");
// // };
