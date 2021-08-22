const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ShopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    photo: String
});

const Shop = mongoose.model('Shop', ShopSchema);
module.exports = Shop;