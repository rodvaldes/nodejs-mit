const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "El Usuario debe tener username."],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "El Usuario debe tener password."],
    },
});

const User= mongoose.model("User",userSchema);
module.exports = User;