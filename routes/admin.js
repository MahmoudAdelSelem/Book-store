const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
const adminProducts = require('../controllers/admin.js');
const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',adminProducts.getAddProductrouter
);

router.get('/products',adminProducts.getAdminProducts);

// /admin/=> POST
router.post('/add-product', adminProducts.postAddProduct);
router.post('/edit-product',adminProducts.postEditProduct);
router.post('/delete/:productId',adminProducts.postDeleteProduct);
router.get('/edit-product/:productId',adminProducts.getEditProduct);


module.exports = router;

