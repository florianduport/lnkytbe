'use strict'

var ProductsService = require('../services/ProductsService');

module.exports = {

  searchProducts: function(req, res) {

    ProductsService.searchProducts({
        
    }).then(function(products){
        
       res.send(products); 
       
    });

  }
  
};