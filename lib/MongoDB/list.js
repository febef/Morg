
var morg = module.parent.exports;

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var list = new schema({
   title    :  String  ,
   comments : [String] ,
   tags     : [String] ,
   entry    :  Date    ,
   duration :  Number  ,
   genere   : [String] ,
   songs    : [String] // ids
});

list.plugin(uniqueValidator);

module.exports = mongoose.model('lists', list);
