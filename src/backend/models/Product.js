const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true, },
    category: { type: String, required: true, },
    image: {
        image: {
            data: Buffer,
            contentType: String
        }
    },
    price: { type: Number, required: true, }
});
module.exports = mongoose.model("Product", ProductSchema);