const mongoose = require("mongoose");
require("../models/postM");
const Post = mongoose.model("Post");

exports.list = function (req, res) {
  Post.find(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};

exports.create = function (req, res) {
  let journal = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  journal.save(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};

exports.delete = function (req, res) {
  let myquery = { _id: req.params.id };
  Post.deleteOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};

exports.update = function (req, res) {
  let myquery = { _id: req.params.id };
  Post.updateOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};
