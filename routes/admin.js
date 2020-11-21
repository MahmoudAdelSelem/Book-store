const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
const adminProducts = require('../controllers/admin.js');
const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',adminProducts.getAddProductrouter
);

router.get('/products',adminProducts.getAdminProducts);

// /admin/add-product => POST
router.post('/add-product', adminProducts.postAddProduct);

module.exports = router;

