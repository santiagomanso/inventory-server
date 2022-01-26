const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//functions that trigger on different METHODS
// api/products POST
router.post('/', 
    productController.createProduct
)

// api/products GET i dont know how to switch between the two get functions so i will only use getBySku
router.get('/', 
    productController.getProductByEAN
    //productController.getProductBySKU
    //productController.getProductByName
)

//update product stock
router.put('/:id',
    productController.updateProductStock
)


module.exports = router;