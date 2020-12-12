const fs =require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename) ,'data','products.json');
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
