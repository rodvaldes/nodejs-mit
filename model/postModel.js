const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "El Post debe tener titulo."],
    },
    body: {
        type: String,
        require: [true, "El post debe tener Body."],
    },
});

const Post= mongoose.model("Post",postSchema);
module.exports = Post;