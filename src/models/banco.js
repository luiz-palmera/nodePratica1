var fs = require('fs');

function banco() {}

banco.prototype.getBanco = function(callback) {
  fs.readFile('./data/bancos.json', 'utf8', function(err, result) {    

    if (!err) {
        callback(err, result);      
    }	   
    
  });
};

module.exports = function(){
  return banco;
}