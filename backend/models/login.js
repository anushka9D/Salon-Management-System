const monngose = require("mongoose");

const loginSchema = new monngose.Schema({

    user_email: {
        type: String,
        required: true,
        unique: true
    },
    user_password: {
        type: String,
        required: true
    },
    userrole: {
        type: String,
        required: true
    }
});

module.exports = monngose.model("Login", loginSchema);