var morg = module.parent.exports;

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');



var song = new schema({
   id           : Number   ,
   title        :  String  ,
   file         :  String  ,
   path         :  String  ,
   interpreter  : [String] ,
   duration     :  Number  ,
   albun        :  String  ,
   genere       : [String] ,
   tags         : [String] ,
   comments     : [String] ,
   bpm          :  Number  ,
   note         :  String  ,
   year         :  Number  ,
   author       : [String] ,
   countplayed  :  Number  ,
   kbps         :  Number  ,
   entry        :  Date    ,
   modification :  Date    ,
   lastplay     :  Date    ,
   leter        : {
                     language : String,
                     strophe  : [{
                        time : Number,
                        text : String
                     }]
                  }
});

song.plugin(uniqueValidator);

module.exports = mongoose.model('songs', song);
