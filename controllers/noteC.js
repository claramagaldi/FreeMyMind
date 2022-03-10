const mongoose = require("mongoose");
require("../models/noteM");
const Note = mongoose.model("Note");

exports.list = function (req, res) {
  Note.find(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};

exports.create = function (req, res) {
  let note = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  note.save(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};

exports.delete = function (req, res) {
  let myquery = { _id: req.params.id };
  Note.deleteOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};
