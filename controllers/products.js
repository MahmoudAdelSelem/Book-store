const Product =require('../models/products.js');

//exports.products = products ;
exports.getAddProductrouter = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

  exports.getAdminProducts = (req, res, next) => {
    const products = Product.fetchAll((products)=>{
    res.render('admin/products', {
      prods : products,
      pageTitle: 'AdminProduct',
      path : '/admin/products',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  });
}



  //req.body.title
  
  exports.postAddProduct = (req, res, next) => {
    const product =new Product(req.body.title);
    product.save() ;
    res.redirect('/');
  };



  exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products)=>{res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/shop/product-list',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });

    }); 
    
  }