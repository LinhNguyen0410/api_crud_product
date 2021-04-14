//model
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const shopSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    due_date: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;