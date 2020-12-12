const fs =require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename) ,'data','cart.json');
const getCartProducts = ()=>{

}


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

}















