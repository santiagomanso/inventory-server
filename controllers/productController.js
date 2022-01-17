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

//get
    //product by name
exports.getProductByName = async (req,res)=>{
    try {
        console.log("               _________________________________________________");
        console.log("               |            - GET PRODUCT BY NAME -            |")
        console.log("               |                                               |");
        console.log("               | req.body.name =  ", req.body.name , "                  |");
        console.log("               | req.query.name =  ", req.query.name , "      |");
        console.log("               | req.params (testing) =  ", req.params , "                  |");
        console.log("               |                                               |");
        console.log("               |_______________________________________________|");
        console.log("                                                                ");
        const product = await Product.find({name: req.body.name}); //
        console.log(product);
        
        res.json({product});
    } catch (error) {
        console.log('There was an error while getting the product, error: ', error)        ;
        res.status(500).send('There was an error getting the product');
    }
}

    //product by SKU
exports.getProductBySKU = async (req,res)=>{
    try {
        console.log("               _________________________________________________");
        console.log("               |            - GET PRODUCT BY SKU -             |")
        console.log("               |                                               |");
        console.log("               | req.body.sku =  ", req.body.sku , "                  |");
        console.log("               | req.query.sku =  ", req.query.sku , "      |");
        console.log("               | req.params (testing) =  ", req.params , "                  |");
        console.log("               |                                               |");
        console.log("               |_______________________________________________|");
        console.log("                                                                ");
        const product = await Product.find({sku: req.query.sku}); //
        console.log(product);
        
        res.json({product});
    } catch (error) {
        console.log('There was an error while getting the product, error: ', error)        ;
        res.status(500).send('There was an error getting the product');
    }
}


exports.updateProductStock = async (req,res)=>{
    
    console.log("REQ PARAMS ID: ", req.params.id);
    console.log("req params: ", req.params);
    console.log("req body params: ", req.body.params); //here comes the whole object from the front-end by axios PUT

    //extract every stock from the body of the request 
    const { name, sku,  shelf_number, shelf_number_backup, stock_total, stock_shelf, stock_backup, image} = req.body.params;
    
    //create empty object and assign stock values (only if there is any of them) will change in future
    const newProduct = {};
    
    if ( name )  { newProduct.name = name }
    if ( sku ) { newProduct.sku = sku }
    if ( shelf_number )  { newProduct.shelf_number = shelf_number }    
    if ( shelf_number_backup ) { newProduct.shelf_number_backup = shelf_number_backup }
    if ( stock_shelf )  { newProduct.stock_shelf = stock_shelf }
    if ( stock_backup ) { newProduct.stock_backup = stock_backup }
    if ( stock_total )  { newProduct.stock_total = newProduct.stock_backup + newProduct.stock_shelf }
    if ( image )  { newProduct.image = image }
    
    console.log("NEW PRODUCT", newProduct);

    try {

        //check for the existance of the product
        let product = await Product.findById(req.params.id);
         if(!product){ return res.status(404).json({ msg: 'Product not found' }) }

        //update product
        product = await Product.findByIdAndUpdate({ _id: req.params.id}, { $set : newProduct }, { new: true })

        res.json({ product })
    } catch (error) {
        console.log("ERROR CATCH update. product controller")
    }
    
}