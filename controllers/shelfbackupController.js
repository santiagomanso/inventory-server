const Shelf = require('../models/ShelfBackup')

exports.createShelfbackup = async (req,res)=>{
    try {

        //create product
        const shelf = new Shelf(req.body);
         
        //save product
        await shelf.save();

        //confirmation msg
        
        res.send('Shelf created correctly')

    } catch (error) {
        console.log('This is the catch from Product Controller, error is: ', error);
        res.status(400).send('There was an error while trying to save a product')
    }
}