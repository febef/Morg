
var morg = module.parent.exports;

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');


var tree = new schema({
   headnode : String ,
   owner    : String
});

module.exports = mongoose.model('trees', tree);
