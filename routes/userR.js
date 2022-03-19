const express = require("express");
const userC = require("../controllers/userC");

// itemRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /item.
const userRoutes = express.Router();

//userRoutes.route("/register").post(userC.auth);

//serRoutes.route("/login").post(userC.auth);

// userRoutes.route("/login/auth/google").get(userC.googleAuth);

// userRoutes.route("/login/auth/facebook").get(userC.facebookAuth);

// userRoutes.route("/login/google").get(userC.googleLogin);

// userRoutes.route("/login/facebook").get(userC.facebookLogin);

module.exports = userRoutes;
