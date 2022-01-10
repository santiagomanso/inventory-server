const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


// api/products POST
router.post('/', 
    productController.createProduct
)

// api/products GET
router.get('/', 
    productController.getProductByName
)

//update product stock
router.put('/:id',
    productController.updateProductStock
)


module.exports = router;