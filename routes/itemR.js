const express = require("express");
const itemC = require("../controllers/itemC");

// itemRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /item.
const itemRoutes = express.Router();

itemRoutes.route("/items").get(itemC.list);

itemRoutes.route("/item/add").post(itemC.create);

itemRoutes.route("/item/delete/:id").delete(itemC.delete);

module.exports = itemRoutes;
