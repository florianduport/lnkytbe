'use strict'
var ZanoxApi = require('zanox-products');

class ZanoxProducts {
    
    searchProducts(criteria){
        
        return new Promise(function(callback, error){
            
            
            ZanoxApi({keywords: 'crème'})
            .id('15EE3DF45A3A3C4E3B62')
            .searchType('phrase')
            .country('FR')
            .page(1)
            .limit(10)
            .done(function (err, products) {
        	  if(err){
        	      callback({});
        	  }
        	  callback(products); 
        	
            });
            
            
           
        });
    }
    
}

module.exports = new ZanoxProducts();