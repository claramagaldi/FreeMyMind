const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
    }, 
    content: {
        type: String,
        required: [true, "Content is required."],
    }, 
    time: {
        type: Date,
    },
    timeString: {
        type: String,
    }
});
  
module.exports = mongoose.model('Post', postSchema);