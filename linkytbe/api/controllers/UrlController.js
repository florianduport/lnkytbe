'use strict'

var UrlService = require('../services/UrlService');

module.exports = {

  redirect: function(req, res){
    
    var product = {
      id : "123",
      url : "http://www.cdiscount.com/informatique/ecrans-informatiques/acer-ecran-23-g236hlbbd/f-10732-g236hlbbd.html"
    }
    
    res.send(product.url);
    
  },

  generateShortUrl: function(req, res) {

    UrlService.generateShortUrl('http://google.fr').then(function(shortUrl){
      res.send(shortUrl);
    });
    
  }
  
};