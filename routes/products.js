const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//create a product 
// api/products
router.post('/', 
    productController.createProduct
)

module.exports = router;