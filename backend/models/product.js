const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    product_photo: {
        type: String,
        required: true,
    },
    product_price: {
        type: Number,
        required: true,
    },
    product_category: {
        type: String,
        required: true,
    },
    product_description: {
        type: String,
        required: true,
    },
    product_status: {
        type: String,
        required: true,
    },
    product_discount: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("Product", productSchema);