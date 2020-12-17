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

  exports.getEditProduct =(req,res,next)=>{
    let productId = req.params.productId;
     Product.findById(productId ,(product )=>{
       if(!product){
         res.redirect('/');
       }
      res.render('admin/edit-product',{
        pageTitle : "edit",
        path :'admin/edit-product',
        description : product.description,
        price : product.price ,
        title :  product.title,
        imgUrl :product.imgurl,
        id :product.id             
       
      })

    })   
    
    
  }

  exports.postEditProduct =(req,res,next)=>{
    
    const newProduct =new Product(req.body.prouductId,req.body.title,req.body.price,req.body.imgurl,req.body.description);
    console.log(req.body.prouductId);   
    newProduct.save();
    res.redirect('/admin/products');

  }

  exports.postDeleteProduct =(req,res,next)=>{    
    //const newProduct = new Product(req.params.productId);
    const productId = req.params.productId ;
    Product.deleteById(productId);
    console.log("deleted");
    res.redirect('/admin/products');
  }
  
  exports.postAddProduct = (req, res, next) => {
    const product =new Product(null,req.body.title,req.body.price,req.body.imgurl,req.body.description);    
    product.save();
    res.redirect('/admin/products');
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