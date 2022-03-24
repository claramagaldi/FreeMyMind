// const express = require("express"),
//   bodyParser = require("body-parser"),
//   session = require("express-session"),
//   cors = require("cors"),
//   path = require("path");

// module.exports = function () {
//   //Create the Express application object
//   const app = express();
//   app.use(express.static(path.join(__dirname, "client", "public")));
//   //app.use(express.static(path.join(__dirname, "client", "build")))
//   app.use(
//     bodyParser.urlencoded({
//       extended: true,
//     })
//   );

//   app.use(cors());
//   app.use(express.json());
//   app.use(require("../routes/noteR"));
//   app.use(require("../routes/itemR"));
//   app.use(require("../routes/postR"));
//   app.use(require("../routes/userR"));
//   app.use(
//     session({
//       secret: "mySecret",
//       resave: false,
//       saveUninitialized: false,
//     })
//   );
//   app.use(passport.initialize());
//   app.use(passport.session());
//   return app;
// };
