const Product =require('../models/products.js');

exports.getAddProductrouter = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };


  exports.postAddProduct = (req, res, next) => {
    const product =new Product(req.body.title,req.body.price,req.body.imgurl,req.body.description);
    product.save() ;
    res.redirect('/');
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