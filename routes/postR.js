const express = require("express");
const postC = require("../controllers/postC");

const postRoutes = express.Router();

postRoutes.route("/posts").get(postC.list);

postRoutes.route("/post/:id").get(postC.read);

postRoutes.route("/post/add").post(postC.create);

postRoutes.route("/post/delete/:id").delete(postC.delete);

postRoutes.route("/post/update/:id").delete(postC.update);

module.exports = postRoutes;