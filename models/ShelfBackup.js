const mongoose = require('mongoose');

//schema product
const ShelfBackupSchema = mongoose.Schema({
    shelf_number_backup: {
        type: String,
        required: true,
        unique: true
    }

})

module.exports = mongoose.model('ShelfBackup', ShelfBackupSchema)