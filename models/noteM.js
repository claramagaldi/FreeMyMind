const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
    }, 
    content: {
        type: String,
        required: [true, "Content is required."],
    }, 

});
  
module.exports = mongoose.model('Note', noteSchema);