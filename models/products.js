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
    constructor(title,price,imgurl,description){
        this.title =title ;
        this.price =price;
        this.description = description;
        this.imgurl =imgurl;
      


    }
     
    save() {
        this.id = Math.random().toString();
        getProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });

        });       
        
    }
    static fetchAll(rp){
        getProductsFromFile(rp);
        
    }
}
