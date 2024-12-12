const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    user_phone: {
        type: Number,
        required: true,
        //match: /^[0-9]{10}$/,
    },
    user_gender: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
        unique: true,
        //match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    user_password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);
