'use strict'


module.exports = {

  requestInvite: function(req, res) {

    res.send('todo');

  },
  
  signin: function(req, res){
    
    res.view('signin');
  },
  
  dashboard: function(req, res){
      
      res.view('dashboard');
  }
  
};