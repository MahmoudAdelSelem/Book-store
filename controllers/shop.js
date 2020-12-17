const Product =require('../models/products.js');
const Cart =require('../models/cart.js');


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


  exports.PostCart = (req,res,next) => {
    const productId = req.body.productId ;
    Product.findById(productId,(product)=>{    
      Cart.addProduct(productId,product.price);
    })
      console.log(productId);
      res.redirect('/shop/cart');
        };
  exports.postDeleteCart =(req,res,next)=>{
    const productId= req.body.productId ;
    const productPrice =req.body.productPrice ;
    Cart.deleteProduct(productId,productPrice);
    res.redirect('/shop/cart');

  }           

  exports.getCart = (req, res, next) => {
    Cart.getCart(cart => {
      Product.fetchAll(products => {
        const cartProducts = [];
        for (product of products) {
          const cartProductData = cart.products.find(
            prod => prod.id === product.id
          );
          if (cartProductData) {
            cartProducts.push({ productData: product, qty: cartProductData.qty });
          }
        }
        res.render('shop/cart', {
          path: '/cart',
          pageTitle: 'Your Cart',
          products: cartProducts,
          totalPay:cart.totalPrice
        });
      });
    });
  };
         

  

  exports.getOrders = (req,res,next) => {
    res.render('shop/orders',{
        pageTitle : 'orders',
        path : 'shop/orders'
    });

}

  exports.checkOut = (req,res,next) => {
    res.render('shop/check-out',{
        pageTitle : 'Cart',
        path : 'shop/check-out'
    });

}



exports.getProduct = (req,res,next)=>{
  const productId = req.params.productId ;
  
  Product.findById(productId , ((product) =>{
    res.render('shop/product-deatail',{   
      product :product ,
      pageTitle :'Deatails',
      path : "shop/product-list"
    });
    
  }))
  
}

