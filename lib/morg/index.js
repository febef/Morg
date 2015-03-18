
module.exports = morg = {};

var path = require('path');
var fs   = require('fs');

fs
   .readdirSync(__dirname)
   .filter(function(file) {
      return (
         ( file.indexOf('.') !== 0          ) &&
         ( file.slice(-3)       == '.js'      ) &&
         ( file                !== 'index.js' )
      );
   })
   .forEach(function(file) {
      if(morg.log)
         morg.log.NotifyGood("Cargando modulo: " + file);
      else
         console.log("+[Morg] Cargando modulo: " + file);

      require(path.join(__dirname, file));
   });
