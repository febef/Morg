

var morg = module.parent.exports;

switch(process.env.NODE_ENV)
{
   case 'production' :
      morg.conf = require('../../config/morg.json');
      break;
   //case 'development' : 
   default:
      morg.conf = require('../../config/morg.json');
      process.env.NODE_ENV = 'development';
}
