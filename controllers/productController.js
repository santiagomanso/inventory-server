const Product = require('../models/Product')


//req comes from body (postman) res i use it on the catch
exports.createProduct = async (req,res) =>{

     try {

        //create product
        product = new Product(req.body);
         
        //save product
        await product.save();

        //confirmation msg
        res.send('Product created correctly')

    } catch (error) {
        console.log('This is the catch from Product Controller, error is: ', error);
        res.status(400).send('There was an error while trying to save a product')
    }
}

//get product
exports.getProductByName = async (req,res)=>{
    try {
        console.log("               _________________________________________________");
        console.log("               |            - GET PRODUCT BY NAME -            |")
        console.log("               |                                               |");
        console.log("               | req.body.name =  ", req.body.name , "       |");
        console.log("               |                                               |");
        const product = await Product.findOne({name: req.body.name}); //
        console.log("               | Product Name: ", product.name, "          |");
        console.log("               | Product Shelf: ", product.shelf_number, "                        |");
        console.log("               | Product Total Stock: ", product.stock_total, "                     |");
        console.log("               | Product Shelf Stock: ", product.stock_shelf, "                     |");
        console.log("               | Product Backup Stock: ", product.stock_backup, "                    |");
        console.log("               |_______________________________________________|");
        res.json({product});
    } catch (error) {
        console.log('There was an error while getting the product, error: ', error)        ;
        res.status(500).send('There was an error getting the product');
    }
}

exports.updateProductStock = async (req,res)=>{
    
    console.log(req.params.id);

    //extract every stock from the body of the request 
    const {stock_total, stock_shelf, stock_backup, shelf_number_backup} = req.body;
    
    //create empty object and assign stock values (only if there is any of them)
    const newProduct = {};
    if ( stock_total )  { newProduct.stock_total = stock_total }
    if ( stock_shelf )  { newProduct.stock_shelf = stock_shelf }
    if ( stock_backup ) { newProduct.stock_backup = stock_backup }
    if ( shelf_number_backup ) { newProduct.shelf_number_backup = shelf_number_backup }


    console.log("stock total: ", newProduct.stock_total)
    console.log("stock shelf: ", newProduct.stock_shelf)
    console.log("stock backup: ", newProduct.stock_backup)
    console.log("shelf_number_backup : ", newProduct.shelf_number_backup)

    try {

        //check for the existance of the product
        let product = await Product.findById(req.params.id);
         if(!product){ return res.status(404).json({ msg: 'Product not found' }) }

        //update product
        product = await Product.findByIdAndUpdate({ _id: req.params.id}, { $set : newProduct }, { new: true })

        res.json({ product })
    } catch (error) {
        
    }
    
}