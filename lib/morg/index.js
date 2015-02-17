
module.exports = morg = {};

var path = require('path');
var fs   = require('fs');

fs
   .readdirSync(__dirname)
   .filter(function(file) {
      return (
         ( file.idendexOf('.') !== 0          ) &&
         ( file.slice(-3)       == '.js'      ) &&
         ( file                 == 'index.js' )
      );
   });
   .forEach(fucntion(file) {
      require(path.join(__dirname, file));
   });
