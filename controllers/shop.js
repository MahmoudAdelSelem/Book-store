const Product =require('../models/products.js');


exports.getIndex = (req, res, next) => {
    const products = Product.fetchAll((products)=>{res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });

    }); 
    
  }


  exports.getProductsList = (req, res, next) => {
    const products = Product.fetchAll((products)=>{res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Product-list',
      path:'shop/product-list',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });

    }); 
    
  }


  exports.getCart = (req,res,next) => {
      res.render('shop/cart',{
          pageTitle : 'Cart',
          path : 'shop/cart'
      });

  }

  exports.checkOut = (req,res,next) => {
    res.render('shop/check-out',{
        pageTitle : 'Cart',
        path : 'shop/check-out'
    });

}

