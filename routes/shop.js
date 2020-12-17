const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
const shopController = require('../controllers/shop.js');

const router = express.Router();

router.post('/shop/cart',shopController.PostCart );
router.post('/shop/delete/:productId',shopController.postDeleteCart);
router.get('/',shopController.getIndex );
router.get('/shop/cart',shopController.getCart);
router.get('/shop/orders',shopController.getOrders );
router.get('/shop/product-list',shopController.getProductsList);
router.get('/products/:productId',shopController.getProduct)
router.get('/shop/check-out',shopController.checkOut );

module.exports = router;
