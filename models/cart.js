const fs =require('fs');
const path = require('path');
const { compile } = require('pug');
const p = path.join(path.dirname(process.mainModule.filename) ,'data','cart.json');


module.exports =  class Cart {
    static addProduct(id ,productPrice){
        //fetsh
        fs.readFile(p,(err,content) => {
            let cart = {products :[], totalPrice :0}
            if(!err){
               cart =  JSON.parse(content);
            }
        
        //analayiz //add/increse count 
        const existProductIndex = cart.products.findIndex(prod => id === prod.id);
        const existProduct = cart.products[existProductIndex];
        let  updatedProduct ;
        if(existProduct){
            updatedProduct ={...existProduct}; // spread items into updated item
            updatedProduct.qty = updatedProduct.qty +1 ;
            cart.products=[...cart.products];
            cart.products[existProductIndex] = updatedProduct;
        }
        else {
            updatedProduct ={id : id  ,qty :1 }
            cart.products = [...cart.products,updatedProduct];

        }

        cart.totalPrice = cart.totalPrice+ +productPrice;
        fs.writeFile(p,JSON.stringify(cart),err =>{
            console.log(err);
        })
        
    });
}
static deleteProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return;
      }
      const updatedCart = { ...JSON.parse(fileContent) };
      const product = updatedCart.products.find(prod => prod.id === id);
      if (!product) {
          return;
      }
      const productQty = product.qty;
      updatedCart.products = updatedCart.products.filter(
        prod => prod.id !== id
      );
      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQty;

      fs.writeFile(p, JSON.stringify(updatedCart), err => {
        console.log(err);
      });
    });
  }
    static getCart(cb){
        fs.readFile(p,(err,content) =>{
            if(err)
            return null;
            else{
               return cb(JSON.parse(content));
            }

        } );
        
    }
}















