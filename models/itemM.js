const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    unique: true,
    required: [true, "Name is required."],
  },
});

module.exports = mongoose.model("Item", itemSchema);
