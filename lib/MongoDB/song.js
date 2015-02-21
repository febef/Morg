var morg = module.parent.exports;

var mongoose = morg.db.mongoose;
var schema = mongoose.Schema;
var uniqueValidator = morg.db.uniqueValidator;


var song = new schema({

   title : String,
   file : String,
   path : String,
   interprete : String,
   duracion : String,
   albun : String,
   genero : String,
   year : Number,
   autor : String,
   countplayed: Number,
   calidad : Number,
   ingreso:Date,
   modificacion : Date,
   lastplay: Date,
   letra :String,
});

song.plugin(uniqueValidator);

module.exports = mongoose.model('songs', song);
