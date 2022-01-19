const mongoose = require('mongoose');

//schema product
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sku : {
        type: Number,
        required: true, //this was an unique modifier but i decided i want to update it since i still get confused between SKU / EAN and testing is hard.
    },
    shelf_number: {
        type: String, //this will change into ObjectID with a ref to a different model, think thats the equivalent to an INNER JOIN / JOIN on SQL 
        required: true
    },
    shelf_number_backup: {
        type: String,
        required: true
    },
    stock_total: {
        type: Number, //when this fields goes to 0 (zero) i got an NaN status, on -1 works fine, need to research more.
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