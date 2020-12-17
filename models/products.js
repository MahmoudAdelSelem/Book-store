const fs =require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename) ,'data','products.json');
const Cart =require('./cart.js')
const getProductsFromFile = (rp) => {    
        fs.readFile(p, (err ,fileContent) =>{
            if(err){
            return rp([]);
            }
            return rp(JSON.parse(fileContent));
        });

};

module.exports=class Product {
    constructor(id,title,price,imgurl,description){
        this.id=id;
        this.title =title ;
        this.price =price;
        this.description = description;
        this.imgurl =imgurl;
      


    }
static deleteById(id){
    
    getProductsFromFile((products)=>{
        const product = products.find(prod=>prod.id===id);
        const updatedProducts = products.filter((product)=>product.id != id);
        fs.writeFile(p,JSON.stringify(updatedProducts),err =>{
            if(!err){
            Cart.deleteProduct(id,product.price);
            }
        });
    })
    

}
    //first delete method
    /*delete(){
        getProductsFromFile((products)=>{
            let existProductindex = products.findIndex((product)=> product.id ===this.id);
            if(existProductindex != -1){
            let updatedProducts =[...products];
            updatedProducts.splice(existProductindex,1);
            fs.writeFile(p,JSON.stringify(updatedProducts),err =>{
                console.log(err);
            })
            }
            else 
            console.log("not here");
        })

    }*/

    
    save() {      

        
        getProductsFromFile(products=>{
            if(this.id){
                let existProductindex = products.findIndex(prod=> prod.id===this.id);
                const updatedProducts = [...products];
                updatedProducts[existProductindex] = this;
                fs.writeFile(p,JSON.stringify(updatedProducts),(err)=>{
                    console.log(err);
                });


            }
            else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
                });
            }

            

        });       
        
    }
    static fetchAll(rp){
        getProductsFromFile(rp);
        
    }

    static findById(id,cb){
        getProductsFromFile(products=>{
           const product = products.find(p => p.id === id);
               cb(product);     
           

        });

    }
}
