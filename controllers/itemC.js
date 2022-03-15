const mongoose = require("mongoose");
require("../models/itemM");
const Item = mongoose.model("Item");

exports.list = function (req, res) {
    Item.find(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};

exports.create = function (req, res) {
  let item = new Item({
    itemName: req.body.itemName,
  });
  item.save(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};

exports.delete = function (req, res) {
  let myquery = { _id: req.params.id };
  Item.deleteOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};