'use strict'
var ZanoxProducts = require('./ProductsProviders/ZanoxProducts');

class ProductsService {
    
    searchProducts(criteria){
        
        return new Promise(function(callback, error){
            
            ZanoxProducts.searchProducts(criteria).then(function(products){
                 callback(products);
            });
           
        });
    }
    
}

module.exports = new ProductsService();