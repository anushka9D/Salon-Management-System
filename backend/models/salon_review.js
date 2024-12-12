const mongoose = require("mongoose");

const salon_reviewSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    user_comment: {
        type: String,
        required: true,
    },
    user_rating: {
        type: Number,
        required: true,
    },
}); 

module.exports = mongoose.model("salon_review", salon_reviewSchema);