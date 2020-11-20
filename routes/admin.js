const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
const productsController = require('../controllers/products.js');
const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',productsController.getAddProductrouter
);

router.get('/products',productsController.getAdminProducts);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;

