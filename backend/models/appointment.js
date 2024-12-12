const monngose = require("mongoose");

const appointmentSchema = new monngose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    user_phone: {
        type: Number,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
        unique: true
    },
    appoint_date: {
        type: String,
        required: true
    },
    appoint_time: {
        type: String,
        required: true
    },
    staff_id: {
        type: String,
        required: true
    },
    appoint_status: {
        type: String,
        required: true
    }
});

module.exports = monngose.model("Appointment", appointmentSchema);