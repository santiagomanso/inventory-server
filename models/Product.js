const mongoose = require('mongoose');

//schema product
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sku : {
        type: Number,
        required: true,
    },
    shelf_number: {
        type: String,
        required: true
    },
    shelf_number_backup: {
        type: String,
        required: true
    },
    stock_total: {
        type: Number,
        required: true
    },
    stock_shelf: {
        type: Number,
        required: true
    },
    stock_backup: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Product', ProductSchema)