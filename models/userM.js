const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    // values: email address, googleId, facebookId
    type: String,
    unique: true,
    required: [true, "Username is required."],
  },
  provider: {
    // values: 'local', 'google', 'facebook'
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = userSchema;
