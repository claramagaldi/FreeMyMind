const express = require("express");
const noteC = require('../controllers/noteC');

// itemRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /item.
const routes = express.Router();

routes.route("/notes")
    .get(noteC.list);

routes.route("/note/add")
    .post(noteC.create);

routes.route("/note/delete/:id")
    .delete(noteC.delete)

module.exports = routes;