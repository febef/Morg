
var morg = module.parent.exports;

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var node = new schema({
   name         :  String  ,
   patherNode   :  String  ,
   childNodes   : [String] ,
   lists        : [String]
});

module.exports = mongoose.model('nodes', node);
