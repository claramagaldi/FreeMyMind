const express = require("express");
const noteC = require("../controllers/noteC");

const noteRoutes = express.Router();

noteRoutes.route("/notes").get(noteC.list);

noteRoutes.route("/note/add").post(noteC.create);

noteRoutes.route("/note/delete/:id").delete(noteC.delete);

module.exports = noteRoutes;
