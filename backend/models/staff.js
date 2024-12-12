const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
    staff_name: {
        type: String,
        required: true,
    },
    staff_photo: {
        type: String,
        required: true,
    },
    staff_phone: {
        type: Number,
        required: true,
    },
    staff_experience: {
        type: String,
        required: true,
    },
    staff_gender: {
        type: String,
        required: true,
    },
    staff_email: {
        type: String,
        required: true,
        unique: true
    },
    staff_password: {
        type: String,
        required: true
    },
    staff_rating: {
        type: [Number],
    },
    staff_review: {
        type: String,
    },
    staff_status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Staff", staffSchema);