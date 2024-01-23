const mongoose = require('mongoose');

// to make the structure of your collection
const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
    },
    author:
    {
        type: String,
        // to but the User Id
    },
    tags:
    {
        type: [String],
    }

})


const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog; //export Variable