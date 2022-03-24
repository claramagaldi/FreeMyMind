const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

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

userSchema.plugin(passportLocalMongoose); // REGISTERED
//userSchema.plugin(findOrCreate); // GOOGLE & FACEBOOK

module.exports = new mongoose.model("User", userSchema);
