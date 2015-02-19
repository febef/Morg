
var morg = module.parent.exports;



morg.server.get('/', function(req, res, next) {
   res.render('panels/home');
});
