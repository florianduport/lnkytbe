'use strict'
var shorturl = require('shorturl'),
login = 'linkytbe',
apiKey = 'R_d968d5a85cab4c4a8414d42e79efaf01',
shortenerService = 'bit.ly';

class UrlService {
    
    generateShortUrl(urlToShorten){
        
        return new Promise(function(callback, error){
            
            shorturl(urlToShorten, shortenerService, {
            	login: login,
            	apiKey: apiKey
            }, function(result) {
            	callback(result);
            });
            
        });
    }
    
}

module.exports = new UrlService();