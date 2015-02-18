
var morg = module.parent.exports;

morg.Server = require("express")();
module.exports = morg;

var path = require('path');
var fs   = require('fs');

fs
   .readdirSync(__dirname)
   .filter(function(file) {
      return (
         ( file.indexOf('.') !== 0          ) &&
         ( file.indexOf('+') !== 0          ) &&
         ( file.slice(-3)     == '.js'      ) &&
         ( file              !== 'index.js' )
      );
   })
   .forEach(function(file) {
      require(path.join(__dirname, file));
   });
