

var morg = module.parent.exports;

switch(process.env.NODE_ENV)
{
   case 'production' :
      morg.conf = require('../../config/morg.conf');
   case 'development' :
   default:
      morg.conf = require('../../config/morg.conf');
      process.env.NODE_ENV = 'development';
}
